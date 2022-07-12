import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = "http://localhost:4200/about"
  constructor(private http:HttpClient) { }
  about() {
    return this.http.get(this.url)
  }
}
