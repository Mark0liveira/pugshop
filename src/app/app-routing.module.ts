import { ProfileComponent } from './pages/acesso/profile/profile.component';
import { AuthService } from './services/auth.service';
import { CadastroComponent } from './pages/acesso/cadastro/cadastro.component';
import { RestaurarLoginComponent } from './pages/acesso/restaurar-login/restaurar-login.component';
import { PetsComponent } from './pages/acesso/pets/pets.component';
import { CarrinhoComponent } from './pages/loja/carrinho/carrinho.component';
import { ProdutosComponent } from './pages/loja/produtos/produtos.component';
import { MasterPageComponent } from './pages/master/frame-master';
import { LoginComponent } from './pages/acesso/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: ProdutosComponent },
      { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthService] }
    ]
  },
  { path: 'conta',
    component: MasterPageComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'pets', component: PetsComponent }
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'recuperar-senha', component: RestaurarLoginComponent},
  { path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
