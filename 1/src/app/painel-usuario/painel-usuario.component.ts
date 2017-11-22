import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service.component';

@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.component.html',
  styleUrls: ['./painel-usuario.component.css']
})
export class PainelUsuarioComponent implements OnInit {

  constructor( private service: UsuarioService) { 
    this.service = service;
  }

  ngOnInit() {
    console.log('testando Init')
  }

  recupera(){
    console.log('Recuperando usuário');
  }

}
