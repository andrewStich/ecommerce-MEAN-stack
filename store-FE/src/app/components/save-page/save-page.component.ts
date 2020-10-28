import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account/account.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.css']
})
export class SavePageComponent implements OnInit {

  form: FormGroup;
  id: string;
  addMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addMode = !this.id;

    const passwordValidators = [Validators.minLength(8)];
    if (this.addMode) {
      passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', passwordValidators]
    });

    if (!this.addMode) {
      this.accountService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));
    }
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.addMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser(): void {
    this.accountService.register(this.form.value).pipe(first()).subscribe({
      next: () => {
        this.alertService.success('User Added successfully', { keepAfterRouteChange: true });
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: error => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }

  private updateUser(): void {
    this.accountService.update(this.id, this.form.value).pipe(first()).subscribe({
      next: () => {
        this.alertService.success('User Added successfully', { keepAfterRouteChange: true });
        this.router.navigate(['../../'], { relativeTo: this.route });
      },
      error: error => {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  }
}
