import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  usersArray:any[]=[];
  selectedUser:string='';
  signupForm:any={
  
    "name": "",
    "email":"",
    "password":"",
     "mobile": "",
     "image":"",
     "type":""
  }
  constructor(private user:UsersService, private router:Router){}
  ngOnInit(): void {
    
  }
  register(){
    this.user.createUser(this.signupForm).subscribe((res:any)=>{
      
      if(res.success){
       alert("Registration successfull");
       this.router.navigate(['/register']);
      }
      else{
       alert("Failed to create employee");
       
      }
 
    })
   
   }

}
