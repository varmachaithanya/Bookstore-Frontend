import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {

  constructor(private router:Router) { }

  name:any
  email:any
  password:any
  mobile:any

  ngOnInit(): void {
    this.name=localStorage.getItem('fullName')
    this.email=localStorage.getItem('email')
    this.password=localStorage.getItem('password')
    this.mobile=localStorage.getItem('mobile')
  }

  navigatetohome(){
    this.router.navigate(['/carts'])

  }
}
