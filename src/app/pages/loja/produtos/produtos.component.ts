import { Produto } from './../../../models/produto.model';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  public produtos$: Observable<Produto[]>;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.produtos$ = this.dataService.getProducts();
  }

}
