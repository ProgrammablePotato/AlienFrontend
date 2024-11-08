import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url = "https://localhost:7122/api/Aliens/"

  constructor(private http:HttpClient) { }

  getAliens() {
    return this.http.get(this.url)
  }

}
