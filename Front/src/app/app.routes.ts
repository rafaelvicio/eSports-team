import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PainelComponent } from './painel/painel.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'painel', component: PainelComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);