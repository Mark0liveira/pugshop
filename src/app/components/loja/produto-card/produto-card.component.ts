import { ToastrService } from 'ngx-toastr';
import { CartUtil } from './../../../utils/cart.util';
import { Produto } from './../../../models/produto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html'
})
export class ProdutoCardComponent implements OnInit {

  @Input() produto: Produto;

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  public adiciona(): void {
    CartUtil.add(
      this.produto._id,
      this.produto.title,
      1,
      this.produto.price,
      this.produto.images[0]
    );
    this.toast.success(`Item adicionado com sucesso! ${this.produto.title}`);
  }

}
