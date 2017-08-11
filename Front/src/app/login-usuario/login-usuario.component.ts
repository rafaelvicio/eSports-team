import { Component, OnInit } from '@angular/core';

import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service.component';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  public usuario = new UsuarioComponent;

  constructor( private service: UsuarioService, private router: ActivatedRoute) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  logar(){

    console.log('Usuário tentando logar: ' + this.usuario)

    this.service
      .logar(this.usuario)
      .subscribe(res => {
        console.log('Tentando logar')
      }, erro => console.log('Deu erro ao tentar logar'))
      
  }

}
