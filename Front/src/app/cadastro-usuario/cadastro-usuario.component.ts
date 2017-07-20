import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service.component';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
