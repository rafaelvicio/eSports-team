import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component'; 

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { UsuarioService } from './usuario/usuario.service.component';
import { TimeService } from './time/time.service.component';

import { LoggedInGuard } from './auth/LoggedInGuard';
import { HttpService } from './auth/ExtendedHttpService';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { SairComponent } from './sair/sair.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroTimeComponent } from './cadastro-time/cadastro-time.component';
import { HomeComponent } from './home/home.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PainelTimesComponent } from './painel-times/painel-times.component';
import { TimeComponent } from './time/time.component';
import { PainelUsuarioEditarComponent } from './painel-usuario-editar/painel-usuario-editar.component';
import { PainelTimeEditarComponent } from './painel-time-editar/painel-time-editar.component';
import { SobreComponent } from './sobre/sobre.component';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';
import { RelatorioGeralComponent } from './relatorio-geral/relatorio-geral.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UsuarioComponent,
    LoginComponent,
    SairComponent,
    PainelUsuarioComponent,
    CadastroUsuarioComponent,
    CadastroTimeComponent,
    HomeComponent,
    LoginUsuarioComponent,
    PainelTimesComponent,
    TimeComponent,
    PainelUsuarioEditarComponent,
    PainelTimeEditarComponent,
    SobreComponent,
    BlogComponent,
    ContatoComponent,
    RelatorioGeralComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [UsuarioService, TimeService, { provide: Http, useClass: HttpService }, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
