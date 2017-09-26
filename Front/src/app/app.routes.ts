import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { SairComponent } from './sair/sair.component';
import { CadastroTimeComponent } from './cadastro-time/cadastro-time.component';
import { PainelTimesComponent } from './painel-times/painel-times.component';

import { LoggedInGuard } from './auth/LoggedInGuard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'painel', component: PainelUsuarioComponent, canActivate: [LoggedInGuard] },
  { path: 'times/cadastro', component: CadastroTimeComponent, canActivate: [LoggedInGuard] },
  { path: 'painel/times', component: PainelTimesComponent, canActivate: [LoggedInGuard]},
  { path: 'painel/sair', component: SairComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);