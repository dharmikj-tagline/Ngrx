import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getAPIAdapPostDetail } from '../../state-post-detail/post-adapter-detail.selector';
import { loadAdapPostDetail } from '../../state-post-detail/post-adapter-detail.action';

@Component({
  selector: 'app-get-post-adap-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-post-adap-detail.component.html',
  styleUrls: ['./get-post-adap-detail.component.scss']
})
export class GetPostAdapDetailComponent {

  private store = inject(Store);
  postDetail !: any;

  ngOnInit() {
    this.store.select(getAPIAdapPostDetail).subscribe(res => {
      this.postDetail = res[0];
    })
    this.store.dispatch(loadAdapPostDetail());
  }
}
