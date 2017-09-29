import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';

import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service.component';
import { TimeService } from './time/time.service.component';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';

import { Http } from '@angular/http';
import { LoggedInGuard } from './auth/LoggedInGuard';
import { HttpService } from './auth/ExtendedHttpService';
import { SairComponent } from './sair/sair.component';
import { CadastroTimeComponent } from './cadastro-time/cadastro-time.component';
import { TimeComponent } from './time/time.component';
import { PainelTimesComponent } from './painel-times/painel-times.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    UsuarioComponent,
    LoginUsuarioComponent,
    PainelUsuarioComponent,
    SairComponent,
    CadastroTimeComponent,
    TimeComponent,
    PainelTimesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdStepperModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [UsuarioService, TimeService, { provide: Http, useClass: HttpService }, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
