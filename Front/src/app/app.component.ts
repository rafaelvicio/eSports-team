import { Component } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public usuario: UsuarioService) {}

}
