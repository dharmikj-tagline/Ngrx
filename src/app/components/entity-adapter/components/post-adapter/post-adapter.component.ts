import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { getAPIAdapPosts } from '../../state/posts-adapter.selector';
import { loadAdapPosts } from '../../state/post-adapter.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-adapter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-adapter.component.html',
  styleUrls: ['./post-adapter.component.scss']
})
export class PostAdapterComponent {

  apiPostLists !: Observable<any>;
  private store = inject(Store<AppState>);
  private router = inject(Router);

  ngOnInit() {
    this.apiPostLists = this.store.select(getAPIAdapPosts);
    this.store.dispatch(loadAdapPosts());
  }

  viewDetail(id: number) {
    this.router.navigate([`posts-adapter/detail/${id}`]);
  }

  navigate() {
    this.router.navigate(['posts-adapter/multi']);
  }
}
