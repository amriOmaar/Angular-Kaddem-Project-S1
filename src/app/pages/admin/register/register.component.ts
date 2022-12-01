import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  option!: FormControl;
  firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  password!: FormControl;

  constructor() {
    this.option = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      option: this.option,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
}
