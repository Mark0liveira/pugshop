import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurarLoginComponent } from './pages/restaurar-login/restaurar-login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PetsComponent } from './pages/pets/pets.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RestaurarLoginComponent,
    CadastroComponent,
    PetsComponent,
    ProdutosComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
