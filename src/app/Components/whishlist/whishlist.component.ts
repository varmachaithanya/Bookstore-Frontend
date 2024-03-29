import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/Bookservice/bookservice.service';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {

  constructor(private data:DataserviceService,private services:BookserviceService) { }
  cartvalue:any
  count:any=1
      id:any=1
      cart:any={
        id:'',
        image:'',
        title:'',
        author:'',
        price:'',
        quantity:''
      }

  ngOnInit(): void {
    debugger
    this.data.currWhishList.subscribe(resp=>{
      this.data.Whishlist=resp;
      this.cart=resp;
      this.cartvalue=resp
      this.count=this.cartvalue[0].quantity
      })
      const whishlistdata = this.data.Books.filter((item: any) => {
        return this.cartvalue.some((cartItem: any) => {
            if (Number(cartItem.id) == item.id) {
                return true;
            }
            return false;
        });
    });
    
    
      this.cart=whishlistdata
  }

  deletewhishlist(id:any){
      
      this.services.deletewhishlist({id:localStorage.getItem('id'),bookId:id}).subscribe(res=>{
        debugger
        this.data.Whishlist=this.data.Whishlist.filter((ele:any)=>{
          if(ele.id!=id){
            return true;
          }
          else{
            return false;
          }
        })
        const wdata = this.data.Books.filter((item: any) => {
          return this.data.Whishlist.some((cartItem: any) => {
              if (Number(cartItem.id) == item.id) {
                  return true;
              }
              return false;
          });
      });
        this.data.updatewhishList(wdata)
      })

    }
    // this.data.updateSharedValue(this.data.Carts)
  }
  


