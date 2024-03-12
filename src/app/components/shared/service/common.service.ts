import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private http = inject(HttpClient);
  private url = 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international';
  // private url = 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/internationalerfrefrefer';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '88fe04b7c4mshb5a9a34894aac15p103b80jsn1e3721ff67f1',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  });
  // private headers = new HttpHeaders({
  //   'X-RapidAPI-Key': '88fe04b7c4mshb5a9a34894aac15p103b80jsn1e3721ffre67f1',
  //   'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.comm'
  // });

  getInternational() {
    return this.http.get(this.url, { headers: this.headers });
  }
}
