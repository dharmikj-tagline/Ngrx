import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { UserDetailStore } from '../../store/user-detail.store';
import { Observable } from 'rxjs';
import { UserList } from '../../interface/users';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserDetailStore]
})

export class UserDetailComponent {

  private userStore = inject(UserDetailStore);
  public userDetail = this.userStore.getUserDetailVW;

  ngOnInit() {
    this.userStore.getUsersDetail();
  }
}

