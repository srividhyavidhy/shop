import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm : any ={
    "name":"",
    "password":""
  }
constructor(private user:UsersService, private router:Router ){}
ngOnInit(): void {
  
}
onLogin(){
  this.user.loginUser(this.loginForm).subscribe((res:any)=>{
    if(res.success){
      alert('User Logged in Success')
      localStorage.setItem('LoginUser', JSON.stringify(res.data));
      this.reloadPage();
     
    }else{
        alert('Not Login User');
    }
    
  })
}  
reloadPage(): void {
  window.location.reload();
}
}
