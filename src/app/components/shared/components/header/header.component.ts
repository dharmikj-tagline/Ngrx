import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../../../auth/state/auth.selector';
import { getCurrentRoute } from '../../../store/router/router.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated !: Observable<boolean>;
  routerLink = [
    {
      label: 'Home',
      link: 'home'
    },
    {
      label: 'Counter',
      link: 'counter'
    },
    {
      label: 'Posts',
      link: 'posts'
    },
    {
      label: 'Posts (Entity Adapter)',
      link: 'posts-adapter'
    },
    {
      label: 'User List(Cmp Store)',
      link: 'user-list'
    },
    {
      label: 'Signals',
      link: 'signal'
    },
    {
      label: 'Login',
      link: 'login'
    },
    {
      label: 'SignUp',
      link: 'sign-up'
    }
  ]
  urlRoute!: Observable<any>;
  constructor(public store: Store<AppState>) {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  ngOnInit() {
    this.urlRoute = this.store.select(getCurrentRoute);
  }
}
