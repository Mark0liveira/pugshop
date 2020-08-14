import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Security } from 'src/app/utils/user.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public usuario: Usuario;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.usuario = Security.getUsuario();
  }

  logout(): void {
    Security.clear();
    this.router.navigate([`/login`]);
  }

}
