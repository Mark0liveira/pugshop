import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private dataService: DataService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ])],
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token.pugshop');
    if (token) {
      this.dataService.refreshToken()
      .subscribe(
        (data: any) => {
          localStorage.setItem('token.pugshop', data.token);
        },
        (err) => {
          localStorage.clear();
        });
    }
  }

  public autentica(): void {
    this.dataService.autenticar(this.form.value)
      .subscribe(
        (data: any) => {
          localStorage.setItem('token.pugshop', data.token);
        },
        (err) => {
          console.log(err);
        });
  }

}
