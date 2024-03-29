import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginSignupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginSignupComponent>) { }

  ngOnInit(): void {
  }  
  onNoClick(): void {
    this.dialogRef.close();
  }

  login=true;

  goToSignUp(){
    this.login=false;
  }

  goToLogin(){
    this.login=true
  }


}
