import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    PainelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
