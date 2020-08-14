import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-restaura',
  templateUrl: './restaurar-login.component.html'
})
export class RestaurarLoginComponent implements OnInit {

  public form: FormGroup;

  public busy = false;

  constructor(private fb: FormBuilder,
              private toastService: ToastrService,
              private dataService: DataService) {
                this.form = this.fb.group({
                  document: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30)
                  ])]
                });
              }

  ngOnInit(): void {
  }

  public submit(): void {
    this.busy = true;

    this.dataService.restaura(this.form.value)
      .subscribe(
        (res: any) => {
          this.toastService.success(res.message);
          this.busy = false;
        },
        (err) => {
          this.toastService.error(err);
          this.busy = false;
        });
  }

}
