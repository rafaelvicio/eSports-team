import { Http, Headers, Response } from '@angular/http';
import { TimeComponent } from './time.component';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TimeService { 

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/api/times';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }

  lista(): Promise<TimeComponent[]>{
      return this.http.get(this.url)
        .toPromise()
        .then(res => res.json())
        .catch();
  }

  cadastrar(time: TimeComponent): Promise<any> {
      if(time._id){
          return this.http.put(this.url + '/' + time._id, JSON.stringify(time),
            { headers: this.headers })
            .toPromise()
                .then(res => res.json())
                .catch();
      } else {
          return this.http.post(this.url, JSON.stringify(time),
          { headers: this.headers })
          .toPromise()
            .then(res => res.json())
            .catch();
      }
  }

  remove(time: TimeComponent): Observable<Response> {
      return this.http.delete(this.url + '/' + time._id);
  }

  buscarPorId(id: string): Observable<TimeComponent> {
     return this.http
      .get(this.url + '/' + id)
      .map(res => res.json());
    }

}