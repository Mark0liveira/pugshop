import { CartUtil } from './../../../utils/cart.util';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  public cart: Cart;

  constructor() { }

  ngOnInit(): void {
    this.loadCarrinho();
  }

  public loadCarrinho(): void {
    this.cart = CartUtil.get();
  }

  public removeItem(item): void {
    const index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  public clear(): void {
    CartUtil.clear();
    this.loadCarrinho();
  }

  public total(): number {
    let total = 0;

    this.cart.items.forEach(item => {
      total += item.price * item.quantity;
    });

    return total;
  }

}
