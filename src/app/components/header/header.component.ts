import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn : boolean = false;
  userInfo:any;
  constructor(){
      const userData = localStorage.getItem('LoginUser');
      if(userData == null) {
        this.isLoggedIn = false;
        
      } else {
        this.isLoggedIn = true;
        this.userInfo = JSON.parse(userData);
       
      }

  }
ngOnInit(): void {
 
}
  Logoff(){
    localStorage.removeItem('LoginUser')
    this.isLoggedIn = false;
  }

}
