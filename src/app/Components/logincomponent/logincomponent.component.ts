import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookserviceService } from 'src/app/Services/Bookservice/bookservice.service';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {

  constructor(private services:BookserviceService,public dialogRef: MatDialogRef<LoginSignupComponent>,private data:DataserviceService) { }

  ngOnInit(): void {
  }
 id:any
  password=false;
  servercartvalue:any
  toggleEye(){
    this.password=!this.password
  }

  loginObj:any={
    email : '',
    password : ''
  }

  login(){
    debugger;
    this.services.loginUser(this.loginObj).subscribe(res=>{
      //console.log(res);

      if(res){
        alert("Login Success");
        this.dialogRef.close();
        let result=JSON.parse(res)
        //console.log(result);

        localStorage.setItem("token", result.token);
        localStorage.setItem("id", result.id);
        localStorage.setItem("fullName", result.fullName);
        localStorage.setItem("email",result.emailId);
        localStorage.setItem("mobile",result.mobile);
        localStorage.setItem("password",result.password);

       this.id=localStorage.getItem('id')
        // localStorage.setItem('id', resp.data.id);
        // localStorage.setItem('fullName',resp.data.fullName);
        // localStorage.setItem('email', resp.data.email);
        debugger;
    //     this.data.Carts.some((cartItem: any) => {
    //      this.services.addcart({id:1,data:{quantity:cartItem.quantity,bookid:cartItem.id}}).subscribe(res=>{
  
    //   })
    // })

        this.services.getcartdata(this.id).subscribe(cart=>{
          debugger
          for(let j=0;j<this.data.Carts.length;j++){
            // let index=cart.data.findIndex((item:any)=>item.id==this.data.Carts[j].id);
            let index = (cart as any[]).findIndex((item: any) => item.id == this.data.Carts[j].id);
            if(index>-1){
              cart[index].quantity=this.data.Carts[j].quantity+cart[index].quantity;
              this.services.updatecart({bookid:cart[index].id,quantity:cart[index].quantity}).subscribe(da=>{
                console.log('updated');
                
              })

            }
            else{
              let foundItem = this.data.Books.find((item: any) => item.id === this.data.Carts[j].id);
if (foundItem) {
    cart.push(foundItem);
}

              
              // cart.push({id:this.data.Carts[j].id,quantity:this.data.Carts[j].quantity})
                  this.data.Carts.some((cartItem: any) => {
                 this.services.addcart({id:1,data:{quantity:cartItem.quantity,bookid:cartItem.id}}).subscribe(res=>{
  
      })
    })
            }

          }
        debugger
        console.log(res);
        
        this.data.updateCartList(cart);
        this.data.updateSharedValue(cart);

        console.log('welcome')
        console.log(res);
        
      })

     
      
      debugger
      this.data.Whishlist.some((whishlistItem: any) => {
        this.services.addtowhishlist({id:1,bookid:whishlistItem.id}).subscribe(res=>{
        })

        

        })
        this.services.getwhishlistdata(this.id).subscribe(resp=>{
          debugger
          this.data.updatewhishList(resp);
     })

     this.services.getaddress().subscribe(resp=>{
      debugger
        this.data.updateAddress(resp);
     })
      
    }
  })
}
}
      
    
 


