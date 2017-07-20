import { Http, Headers, Response } from '@angular/http';
import { UsuarioCo } from '.t
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/v1/usuarios';

    constructor(http: Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    listar(): Observable<CadastroUsuarioComponent[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }

}