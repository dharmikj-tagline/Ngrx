import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private http = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/posts'

  getPostsList(): Observable<any> {
    return this.http.get(this.url);
  }

  getPostsById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
