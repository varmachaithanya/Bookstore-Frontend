import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataserviceService } from '../../Services/dataservice/dataservice.service';
import { BookserviceService } from '../../Services/Bookservice/bookservice.service';
import { Router } from '@angular/router';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Output() orders=new EventEmitter<any>();
cartdata:any={
  image:'',
  title:'',
  author:'',
  price:''
}
cartvalue:any=[]
servercartvalue:any
useraddress:boolean=false
ordersummary:boolean=false
toggleplaceorder:boolean=true
ordersdata:boolean=true


  constructor(private data:DataserviceService,private services:BookserviceService,private router:Router,public dialog: MatDialog) { }
count:any=1
cdata:any
id:any=1
cart:any={
  id:'',
  image:'',
  title:'',
  author:'',
  price:'',
  quantity:''
}
servercart:any={
  id:'',
  image:'',
  title:'',
  author:'',
  price:'',
  quantity:''
}

  ngOnInit(): void {
    this.getdata();

  }

  getdata(){
    // setTimeout(()=>{
    //   this.cartdata=this.data.Books;
    //   debugger
    //   const result = this.cartdata.filter((res:any)=>res.id==this.id); 
    //  this.cart=result;
    //  console.log(this.cart)
    //   debugger
    //   if(localStorage.getItem('Token')){
    //     this.services.getcartdata(this.id).subscribe(res=>{
    //       this.data.Carts=res
    //       const value=this.cart.push(...res)
    //       this.cartvalue= this.cart.slice(); 
    //   }
    // )}
    // else{
    //   this.cartvalue=this.cart
    // }
debugger
    this.data.currCartList.subscribe(resp=>{
      this.data.Carts=resp;
      this.cart=resp;
      for (let i = 0; i < resp.length; i++) {
        this.cartvalue.push(resp[i]);
        console.log(this.cartvalue);
        
    }
    
      
      // this.count=this.cartvalue[0].quantity
      })




      // const cartlistdata= this.data.Books.filter((item:any)=>{

      //   if(item.id==this.cartvalue[0].id){
      //     return true;
      //   }else{
      //     return false;
      //   }
      // })

      const cartlistdata = this.data.Books.filter((item: any) => {
        debugger;
        return this.cartvalue.some((cartItem: any) => {
            if (cartItem.id === item.id) {
                item.quantity=cartItem.quantity;

                return true;
            }
            return false;
        });
    });


  
    

      this.cart=cartlistdata


   
    // }, 100)
  }

  handleevent($event:any){
    this.ordersummary=$event
  }

  orderSucess(){
    debugger
    this.data.button=true
    this.router.navigate(['/ordersucess'])
  }

  deletecart(data:any){
    debugger
    if(localStorage.getItem('token')){

      this.services.deletecart({id:localStorage.getItem('id'),bookId:data}).subscribe(res=>{
        debugger
        this.data.Carts=this.data.Carts.filter(ele=>{
          if(ele.id!=data){
            return true;
          }
          else{
            return false;
          }
        })
        this.data.updateCartList(this.data.Carts)
      })

    }else{
      this.data.Carts=this.data.Carts.filter(rem=>{
        if(rem.id!=data){
          return true;
        }
        else{
          return false;
        }
      })
    }
    this.data.updateCartList(this.data.Carts)
    this.data.updateSharedValue(this.data.Carts)
    
    // console.log(this.cartdata.lenght)
    // this.router.navigate(['/carts']);

   
  }

  increment(){
    this.count+=1
  }

  decrement(){
    this.count-=1
    if(this.count<1){
      this.count=1
    }
  }

  opendialog(){
    debugger
    if(localStorage.getItem('token')){
      this.useraddress=true
    }else{
    const dialogRef = this.dialog.open(LoginSignupComponent, {width:'740px',height:'475px'});
    dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

   
  })


  //   });
  // }
    
    }
  }
}

