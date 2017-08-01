import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service.component';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';

import { Http } from '@angular/http';
import { LoggedInGuard } from './auth/LoggedInGuard';
import { HttpService } from './auth/ExtendedHttpService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    UsuarioComponent,
    LoginUsuarioComponent,
    PainelUsuarioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [UsuarioService, { provide: Http, useClass: HttpService }, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
