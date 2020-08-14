import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MasterPageComponent } from './pages/master/frame-master';
import { RestaurarLoginComponent } from './pages/acesso/restaurar-login/restaurar-login.component';
import { ProdutosComponent } from './pages/loja/produtos/produtos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarrinhoComponent } from './pages/loja/carrinho/carrinho.component';
import { CadastroComponent } from './pages/acesso/cadastro/cadastro.component';
import { LoginComponent } from './pages/acesso/login/login.component';
import { ProdutoCardComponent } from './components/loja/produto-card/produto-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

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
    MasterPageComponent,
    ProdutoCardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
