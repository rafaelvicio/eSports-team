import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service.component';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  constructor(private service: UsuarioService) { 
    this.service = service;
  }

  ngOnInit() {
  }

  sair(){
    this.service.logout();
    console.log('Saindooooooooooooooooooooo');
  }

}
