import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile-App';
  data="";
  about:any;
  constructor(private userData:UsersDataService) {
    userData.about().subscribe((data)=>this.about=data)
  }
}
