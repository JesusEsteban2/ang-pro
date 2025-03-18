import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'cas-register',
  imports: [ReactiveFormsModule],
  styles: ``,
  template: ` <form [formGroup]="formGroup">
    <label>
      <span>First Name</span>
      <input type="text" forControlName="firstName" />
    </label>
    <label>
      <span>Last Name</span>
      <input type="text" forControlName="lastName" />
    </label>
    <label>
      <span>Email</span>
      <input type="email" forControlName="email" />
    </label>
    <label>
      <span>Password</span>
      <input type="password" forControlName="password" />
    </label>
    <button type="submit" [disabled]="formGroup.invalid">Registrar</button>
  </form>`,
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  formGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(5), Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  constructor() {
    console.log(this.formGroup);
  }

  userService = inject(UserService);
  onSubmit() {
    console.log(this.formGroup);
    this.userService.register(this.user);
  }
}
