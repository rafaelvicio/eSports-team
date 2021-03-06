import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from './usuario.service.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() _id: string;
  @Input() login: string;
  @Input() senha: string;
  @Input() nome: string;

  constructor() { }

  ngOnInit() {
  }

}
