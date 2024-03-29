import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Services/dataservice/dataservice.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.scss']
})
export class OrdersummaryComponent implements OnInit {
  cart:any={
    id:'',
    image:'',
    title:'',
    author:'',
    price:'',
    quantity:''
  }
  cartvalue:any
  count:any
  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
    this.data.currCartList.subscribe(resp=>{
      this.cartvalue=resp
      this.count=this.cartvalue[0].quantity
      })


      const cartlistdata = this.data.Books.filter((item: any) => {
        return this.cartvalue.some((cartItem: any) => {
            if (cartItem.id === item.id) {
              item.quantity=cartItem.quantity;
                return {...item, quantity: cartItem.quantity};
            }
            return false;
        });
    });
    
    
      this.cart=cartlistdata
  }
  }


