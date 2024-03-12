import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { getAPIPosts, getPosts } from '../../state/posts.selector';
import { addPost, deletePost, loadAPIPost, updatePost } from '../../state/posts.action';
import { AppState } from 'src/app/components/store/app.state';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  postLists !: any;
  apiPostLists !: any;
  isUpdate: boolean = false;
  updateId !: number;
  profileForm !: FormGroup
  private fb = inject(FormBuilder);
  private store = inject(Store<AppState>);

  constructor() {
    this.postLists = this.store.select(getPosts);
    this.postForm();
  }

  ngOnInit() {
    this.apiPostLists = this.store.select(getAPIPosts)
    this.store.dispatch(loadAPIPost());
  }

  postForm() {
    this.profileForm = this.fb.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  addPost() {
    if (this.profileForm.invalid) {
      return;
    }
    else {
      if (this.isUpdate) {
        this.store.dispatch(updatePost({ post: this.profileForm.value, id: this.updateId }));
      }
      else {
        this.store.dispatch(addPost({ post: this.profileForm.value }));
      }
      this.isUpdate = false;
      this.profileForm.reset();
    }
  }

  patchUpdate(postDetail: any) {
    this.isUpdate = true;
    this.updateId = postDetail.id;
    this.profileForm.patchValue(postDetail);
  }

  deletePost(i: number) {
    this.store.dispatch(deletePost({ index: i }));
  }

  resetPost() {
    this.profileForm.reset();
    this.isUpdate = false;
  }
}
