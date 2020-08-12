import { MasterPageComponent } from './pages/master/frame-master';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurarLoginComponent } from './pages/acesso/restaurar-login/restaurar-login.component';
import { ProdutosComponent } from './pages/loja/produtos/produtos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrinhoComponent } from './pages/loja/carrinho/carrinho.component';
import { CadastroComponent } from './pages/acesso/cadastro/cadastro.component';
import { LoginComponent } from './pages/acesso/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RestaurarLoginComponent,
    CadastroComponent,
    AppComponent,
    ProdutosComponent,
    CarrinhoComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
