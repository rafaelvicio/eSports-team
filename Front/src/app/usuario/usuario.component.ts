import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  _id: string = '';

  constructor() { }

  ngOnInit() {
  }

}
