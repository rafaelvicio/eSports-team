import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service.component';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: UsuarioComponent = new UsuarioComponent();

  constructor( private service: UsuarioService, private router: ActivatedRoute) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  cadastrar(){
    console.log('Cadastrando usuário.')
  }

  cadastrar2(){

    this.service.cadastrar(this.usuario)
      .then(res => {
        this.usuario = new UsuarioComponent();
        console.log('foi!')
      })
      .catch(erro => console.log(erro));

  }

}
