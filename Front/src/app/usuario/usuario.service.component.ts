import { Http, Headers, Response } from '@angular/http';
import { UsuarioComponent } from './usuario.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService { 

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/v1/fotos';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }

  lista(): Observable<UsuarioComponent[]>{
      return this.http.get(this.url)
        .map(res => res.json());
  }

  cadastrar(usuario: UsuarioComponent) {
      if(usuario._id){
          return this.http.put(this.url + '/' + usuario._id, JSON.stringify(usuario),
            { headers: this.headers })
            .toPromise()
                .then()
                .catch()
      } else {
          return this.http.post(this.url, JSON.stringify(usuario),
          { headers: this.headers })
          .toPromise()
            .then()
            .catch()
      }
  }

  remove(usuario: UsuarioComponent) {
      return this.http.delete(this.url + '/' + usuario._id);
  }

  buscarPorId(id: string) {
      return this.http.get(this.url + '/' + id)
        .map( res => res.json())
  }

}