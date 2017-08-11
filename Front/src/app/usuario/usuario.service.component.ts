import { Http, Headers, Response } from '@angular/http';
import { UsuarioComponent } from './usuario.component';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UsuarioService { 

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/api/auth/autenticar';

    private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public loggedIn: Observable<boolean> = this._loggedIn.asObservable();

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }

  lista(): Promise<UsuarioComponent[]>{
      return this.http.get(this.url)
        .toPromise()
        .then(res => res.json())
        .catch();
  }

  cadastrar(usuario: UsuarioComponent): Promise<any> {
      if(usuario._id){
          return this.http.put(this.url + '/' + usuario._id, JSON.stringify(usuario),
            { headers: this.headers })
            .toPromise()
                .then(res => res.json())
                .catch();
      } else {
          return this.http.post(this.url, JSON.stringify(usuario),
          { headers: this.headers })
          .toPromise()
            .then(res => res.json())
            .catch();
      }
  }

  remove(usuario: UsuarioComponent): Observable<Response> {
      return this.http.delete(this.url + '/' + usuario._id);
  }

  buscarPorId(id: string): Observable<UsuarioComponent> {
     return this.http
      .get(this.url + '/' + id)
      .map(res => res.json());
    }

    // Auth

    autentica(usuario: UsuarioComponent) {
      console.log('meu usuário2222' + usuario)
      return this.http
                 .post(this.url, JSON.stringify(usuario))
                 .map((res) => {                     
                    var token = res.headers.get('x-access-token');
                    if (token) {
                        this._loggedIn.next(true);
                        localStorage.setItem('token', token);
                    }
                 });
  }

  logar(usuario: UsuarioComponent) {
    console.log('Meu usuário:' + JSON.stringify(usuario))
    return this.http.post(this.url, JSON.stringify(usuario))
      .map((res) => {       
        console.log('meu token:' + res.headers.get('x-access-token'))              
        var token = res.headers.get('x-access-token');
          if (token) {
            console.log('tem token')
            this._loggedIn.next(true);
            localStorage.setItem('token', token);
           }
        }, err => console.log('deu erro no service: ' + err));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if(token){ //essa atribuição é feita para atualizar a variavel e o resto do sistema ser notificado
      this._loggedIn.next(true);
    } else {
      this._loggedIn.next(false);
    }

    return this._loggedIn.getValue();
  }

}