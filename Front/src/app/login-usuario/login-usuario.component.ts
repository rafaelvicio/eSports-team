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

  usuario: UsuarioComponent = new UsuarioComponent();

  constructor( private service: UsuarioService, private router: ActivatedRoute) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  logar(){

      this.service.logar(this.usuario)
        .then( res => {
          console.log('Logando...')
        })
        .catch(erro => console.log(erro))
        
  }

}
