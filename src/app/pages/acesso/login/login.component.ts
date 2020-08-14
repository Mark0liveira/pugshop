import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  public busy = false;

  constructor(private fb: FormBuilder,
              private dataService: DataService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60),
      ])],
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token.pugshop');
    if (token) {
      this.busy = true;
      this.dataService.refreshToken()
      .subscribe(
        (data: any) => {
          localStorage.setItem('token.pugshop', data.token);
          this.busy = false;
        },
        (err) => {
          localStorage.clear();
          this.busy = false;
        });
    }
  }

  public autentica(): void {
    this.busy = true;
    this.dataService.autenticar(this.form.value)
      .subscribe(
        (data: any) => {
          localStorage.setItem('token.pugshop', data.token);
          this.busy = false;
        },
        (err) => {
          console.log(err);
          this.busy = false;
        });
  }

}
