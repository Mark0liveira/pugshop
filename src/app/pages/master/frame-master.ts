import { Component } from '@angular/core';

@Component({
  selector: 'app-frame-master',
  template: `<app-navbar></app-navbar>
            <router-outlet></router-outlet>`
})
export class MasterPageComponent {
}
