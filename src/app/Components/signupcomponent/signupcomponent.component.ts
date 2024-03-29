import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupcomponent',
  templateUrl: './signupcomponent.component.html',
  styleUrls: ['./signupcomponent.component.scss']
})
export class SignupcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  password=false;
  toggleEye(){
    this.password=!this.password
  }

  userObj:any={
    fullName:'',
    email:'',
    password:'',
    phone:''
  }

  submitForm(){
    console.log(this.userObj);
    
  }

}
