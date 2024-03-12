import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.action';
import { AppState } from '../../store/app.state';
import { setLoadingSpinner } from '../../shared/state/shared.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm !: FormGroup;

  fb = inject(FormBuilder);
  authService = inject(FormBuilder);
  store = inject(Store<AppState>);

  constructor() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [null],
      password: [null]
    })
  }

  login() {
    // this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loginStart(this.loginForm.value));
  }
}
