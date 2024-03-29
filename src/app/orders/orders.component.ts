import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Services/dataservice/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private data:DataserviceService,private router:Router) { }
  cartvalue:any
  orders:boolean=false
  count:any
  cart:any={
    id:'',
    image:'',
    title:'',
    author:'',
    price:'',
    quantity:''
  }

  ngOnInit(): void {

    this.orders=this.data.button


    this.data.currCartList.subscribe(resp=>{
      this.cartvalue=resp
      this.count=this.cartvalue[0].quantity
      })


      const cartlistdata = this.data.Books.filter((item: any) => {
        return this.cartvalue.some((cartItem: any) => {
            if (cartItem.id === item.id) {
                return {...item, quantity: cartItem.quantity};
            }
            return false;
        });
    });
    
    
      this.cart=cartlistdata
  }



}
