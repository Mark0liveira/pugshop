import { Security } from './../../../utils/user.util';
import { CustomValidator } from './../../../validators/custom.validator';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  public busy = false;

  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        CustomValidator.isCpf()
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60)
      ])],
    });
  }

  ngOnInit(): void {
    const token = Security.getToken();
    if (token) {
      this.busy = true;
      this.dataService.refreshToken()
      .subscribe(
        (data: any) => {
          this.setUser(data.customer, data.token);
          this.busy = false;
        },
        (err) => {
          Security.clear();
          this.busy = false;
        });
    }
  }

  public autentica(): void {
    this.busy = true;
    this.dataService.autenticar(this.form.value)
      .subscribe(
        (data: any) => {
          this.setUser(data.customer, data.token);
          this.busy = false;
        },
        (err) => {
          console.log(err);
          this.busy = false;
        });
  }

  public setUser(user, token): void {
    Security.set(user, token);
    this.router.navigate([`/`]);
  }

}
