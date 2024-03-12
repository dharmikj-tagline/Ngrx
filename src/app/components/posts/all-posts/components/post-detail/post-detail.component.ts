import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from 'src/app/components/store/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../../state/posts.selector';
import { Post } from '../../interface/posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {

  postDetail !: Observable<Post>;
  constructor(private store: Store<AppState>) {
    this.postDetail = this.store.select(getPostById);
  }
}
