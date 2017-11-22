import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service.component';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: UsuarioComponent = new UsuarioComponent();

  constructor( private service: UsuarioService) { 
    this.service = service;
  }

  ngOnInit() {
  }

  cadastrar(){
    
        this.service.cadastrar(this.usuario)
          .then(res => {
            this.usuario = new UsuarioComponent();
            console.log('foi!')
          })
          .catch(erro => console.log(erro));
    
      }
    

}
