import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStore } from '../../store/user.store';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserStore]
})
export class UserListComponent {
  private router = inject(Router);
  private userStore = inject(UserStore);
  private userService = inject(UserService);
  userViewModal$: Observable<any> = this.userStore.userViewModal;
  isUpdate: boolean = false;

  ngOnInit() {
    this.userStore.getUsers();
  }

  addUser() {
    this.userStore.createPost({
      id: null,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    });
  }

  viewDetail(id: number) {
    this.router.navigate([`user-detail/${id}`]);
  }
}
