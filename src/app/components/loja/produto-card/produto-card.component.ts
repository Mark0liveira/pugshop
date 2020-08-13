import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html'
})
export class ProdutoCardComponent implements OnInit {

  @Input() produto: any;

  constructor() { }

  ngOnInit(): void {
  }

}
