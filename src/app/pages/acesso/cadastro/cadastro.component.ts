import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from 'src/app/validators/custom.validator';

import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  public form: FormGroup;

  public busy = false;

  constructor(private fb: FormBuilder,
              private toastService: ToastrService,
              private dataService: DataService) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        CustomValidator.EmailValidator
      ])],
      cpf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        CustomValidator.isCpf()
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
    });
  }

  ngOnInit(): void {
  }

  create(): void {
    this.busy = true;

    this.dataService.create(this.form.value)
      .subscribe(
        (res: any) => {
          this.toastService.success('Cadastro efetuado com sucesso!');
          this.busy = false;
        },
        (err) => {
          this.toastService.error('Houve algum erro para cadastrar!');
          this.busy = false;
        });
  }

}
