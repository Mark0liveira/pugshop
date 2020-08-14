import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

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
                  document: [{ value: '', disabled: true }],
                });
    }

  ngOnInit(): void {
    this.getProfile();
  }

  public getProfile(): void {
    this.busy = true;

    this.dataService.getProfile()
      .subscribe(
        (res: any) => {
          this.busy = false;
          this.form.controls.name.setValue(res.name);
          this.form.controls.email.setValue(res.email);
          this.form.controls.document.setValue(res.document);
        },
        (err) => {
          this.busy = false;
        });
  }

  public submit(): void {
    this.busy = true;

    this.dataService.putProfile(this.form.value)
      .subscribe(
        (res: any) => {
          this.toastService.success(res.message);
          this.busy = false;
        },
        (err) => {
          this.toastService.error('Houve algum erro para cadastrar!');
          this.busy = false;
        });
  }

}
