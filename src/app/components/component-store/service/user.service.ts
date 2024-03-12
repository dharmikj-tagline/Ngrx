import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserList } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private url: string = 'https://jsonplaceholder.typicode.com/';

  constructor() { }

  getUsers(): Observable<UserList[]> {
    return this.http.get<UserList[]>(this.url + 'users');
  }

  getUsersById(id: number): Observable<UserList[]> {
    return this.http.get<UserList[]>(this.url + 'users/' + id);
  }

  createUsers(users: UserList): Observable<UserList[]> {
    return this.http.post<UserList[]>(this.url + 'users', users);
  }
}
