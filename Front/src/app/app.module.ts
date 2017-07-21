import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainelComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
