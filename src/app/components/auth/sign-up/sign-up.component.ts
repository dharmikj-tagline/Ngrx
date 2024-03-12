import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart, signUpStart } from '../state/auth.action';
import { AppState } from '../../store/app.state';
import { setLoadingSpinner } from '../../shared/state/shared.action';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  roles: string[] = ['student', 'teacher'];
  signUpForm !: FormGroup;

  fb = inject(FormBuilder);
  authService = inject(FormBuilder);
  store = inject(Store<AppState>);

  constructor() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.signUpForm = this.fb.group({
      name: [null],
      email: [null],
      password: [null],
      role: ['student']
    })
  }

  signUp() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(signUpStart(this.signUpForm.value));
  }
}
