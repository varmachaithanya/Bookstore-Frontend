import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/Services/Bookservice/bookservice.service';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  subscription!: Subscription;
  searchString:any=''
cartdata:any
whishlistdata:any
BookList:any
newdata:any
name:any
id:any
paramsId:any={
  id:''
}

  constructor(private services:BookserviceService,private activateroute:ActivatedRoute,private data:DataserviceService,private router:Router,private dialog:MatDialog) { }

  notification:number=0;
  retrievedData: any;
  UserName:any='Profile'

  ngOnInit(): void {
    this.name=localStorage.getItem("fullName")
    this.id=localStorage.getItem("id")
    console.log(this.name);
    
    this.paramsId=this.activateroute.snapshot.params;
    debugger
    this.services.getdata().subscribe(res=>{
      this.newdata=res;
      this.data.Books=this.newdata;
    })
    // this.subscription=this.data.currBookList.subscribe((resp:any)=>{
    //   this.BookList=this.newdata;
    // })

    debugger
   this.data.sharedValue$.subscribe(resp=>{
    this.notification=resp.length
    console.log(this.notification);
    
    });
    
   
    if(localStorage.getItem('fullName')){
      this.UserName=localStorage.getItem('fullName')
    }

    if(localStorage.getItem('token')){
      debugger
      this.services.getcartdata(this.id).subscribe(res=>{
        this.data.updateCartList(res);
        this.data.updateSharedValue(res)
      // this.data.Carts=res;
      })
      debugger
      this.services.getwhishlistdata(this.id).subscribe(res=>{
        console.log('welcome');
        
        console.log(res);
        
        this.data.updatewhishList(res);
      // this.data.Whishlist=res;
     
      console.log(this.data.Whishlist);
      
      })
  
    }

  }

  loginclick:boolean=false
  loggedin:boolean=false
  profiledata(){
    if(localStorage.getItem('token')){
      this.loggedin=!this.loggedin
    }else{
    this.loginclick=!this.loginclick
  }
}

login(){
  const dialogRef = this.dialog.open(LoginSignupComponent, {width:'740px',height:'475px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.loginclick=!this.loginclick
}



  logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("fullName");
        localStorage.removeItem("id");
        localStorage.removeItem("email")
        this.loggedin=!this.loggedin
        this.data.Whishlist=[]
        this.data.updatewhishList(this.data.Whishlist)
        this.data.Carts=[]
        this.data.updateCartList(this.data.Carts)
        this.data.updateSharedValue(this.data.Carts)
        this.router.navigate(['/carts'])

        

  }


  profile(){
    this.router.navigate(['/personaldetails'])
  }

  whishlist(){
    this.router.navigate(['/whishlist'])
  }

  orders(){
    this.router.navigate(['/orders'])
  }

  searchdata(){
    //console.log(this.searchString);
    
    this.data.updateSearch(this.searchString);
  }

  navigatetocart(){
    debugger
    // this.services.getcartdata(this.id).subscribe(res=>{
    //   this.data.Carts=res;
    // })
   

      this.router.navigate(['/cart']);
    
 }
 navigatetocarts(){
  this.router.navigate(['/carts']);

 }



}
