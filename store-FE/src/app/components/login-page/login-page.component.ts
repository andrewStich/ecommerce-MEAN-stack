import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  uname: string;
  pass: string;
  user: User;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      uname: new FormControl(''),
      pass: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.loginForm.value);
  }

}
