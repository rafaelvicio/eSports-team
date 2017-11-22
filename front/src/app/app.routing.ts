import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { SairComponent } from './sair/sair.component';
import { CadastroTimeComponent } from './cadastro-time/cadastro-time.component';
import { PainelTimesComponent } from './painel-times/painel-times.component';
import { RelatorioGeralComponent } from './relatorio-geral/relatorio-geral.component';
import { PainelUsuarioEditarComponent } from './painel-usuario-editar/painel-usuario-editar.component';

import { LoggedInGuard } from './auth/LoggedInGuard';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro', component: CadastroUsuarioComponent },
    { path: 'login', component: LoginUsuarioComponent },
    { path: 'painel', component: PainelUsuarioComponent, canActivate: [LoggedInGuard]},
    { path: 'painel/editar', component: PainelUsuarioEditarComponent, canActivate: [LoggedInGuard]},
    { path: 'painel/times', component: PainelTimesComponent, canActivate: [LoggedInGuard]},
    { path: 'painel/times/cadastro', component: CadastroTimeComponent, canActivate: [LoggedInGuard]},
    { path: 'painel/times/relatorio', component: RelatorioGeralComponent, canActivate: [LoggedInGuard]},
    { path: 'painel/sair', component: SairComponent, canActivate: [LoggedInGuard] },
    { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
