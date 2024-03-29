import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookserviceService } from '../../Services/Bookservice/bookservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../Services/dataservice/dataservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit,OnDestroy {
// IdData:any
cartdata:any
whishlistdata:any
// button:boolean=true
count:any=1

cart:any

newdata:any={
  id:'',
  image:'',
  title:'',
  description:'',
  price:'',
  author:''
}
paramsId:any={
  id:''
}
CartList:any=[]
WhishList:any=[]


subscription!: Subscription;

  constructor(private services:BookserviceService,private router:Router,private activateroute:ActivatedRoute,private data:DataserviceService) { }
  ngOnInit(): void {
    console.log(this.CartList);
    
   


    debugger
    // this.IdData=this.services.BookId;
    // console.log(this.IdData)
    this.paramsId=this.activateroute.snapshot.params;
    console.log(this.paramsId.id);

    this.getdata();

   // this.services.getcartdata(this.paramsId.id).subscribe(res=>{
    //   this.cartdata=res;
    //   console.log(this.cartdata)
    // })

    // this.services.getwhishlistdata(this.paramsId.id).subscribe(res=>{
    //   this.whishlistdata=res;
    //   console.log(this.whishlistdata)
    // })
    debugger
    this.subscription=this.data.currCartList.subscribe((resp:any)=>{
      this.CartList=resp;
      // for (let i = 0; i < resp.length; i++) {
      //   this.CartList.push(resp[i]);
      // }
      
      const result = resp.filter((res:any)=>res.id==this.paramsId.id); 
      // this.newdata=result[0];
  })

  debugger
  this.subscription=this.data.currWhishList.subscribe((resp:any)=>{
    this.WhishList=resp;
    const result = resp.filter((res:any)=>res.id==this.paramsId.id); 
    // this.newdata=result[0];
})

console.log(this.CartList);

if (this.CartList.some((item:any) => item.id == this.paramsId.id)) {
  this.button = false;
  const index=this.CartList.findIndex((item:any)=>item.id==this.paramsId.id);
  this.count=this.CartList[index].quantity
}
else{
  this.button=true;
  
 

}
}


    
      // console.log(this.newdata)

    
      getdata(){
        debugger
        setTimeout(()=>{
          this.newdata=this.data.Books;
         const result = this.newdata.filter((res:any)=>res.id==this.paramsId.id); 
        this.newdata=result[0];
        console.log(this.newdata)
        }, 100)
      }
       
       

  

  navigatetohome(){
    this.router.navigate(['/carts']);
  }
  button=true
  quantity(){

    debugger
    
    this.button=!this.button;

    this.count=1;
    
    // this.data.Carts.push({id: this.newdata.id, quantity: this.count})
    // console.log(this.data.Carts);
    
    // this.services.addcart({id:1,data:{quantity:this.count,bookid:this.newdata.id}}).subscribe(res=>{

    // })

    let obj={
      id:this.newdata.id,
      quantity:this.count,
    }

    this.data.updateCartList([...this.CartList, obj])
    this.data.updateSharedValue(this.CartList)


  }

  increment(){
    this.count+=1
    
  }

  decrement(){
    this.count-=1
    if(this.count<1){
      this.count=0;
      this.button=true
      // this.services.deletecart({id:1}).subscribe(res=>{

      // })
    }
  }

  whishlist(data:any){
    debugger;
    let obj={
      userid:1,
      id:this.paramsId.id
    }

    this.data.updatewhishList([...this.WhishList, obj])

    if(localStorage.getItem('token')){
      this.services.addtowhishlist({id:localStorage.getItem('id'),bookId:data}).subscribe(res=>{
        
      })
    }
    
  }

  

  ngOnDestroy(): void {
    debugger
    this.subscription.unsubscribe;
    const index=this.CartList.findIndex((item:any)=>item.id==this.paramsId.id);
    if(this.CartList[index].quantity>this.count || this.CartList[index].quantity<this.count){
      this.CartList[index].quantity=this.count
    }


    // let obj={
    //   userid:1,
    //   bookid:this.paramsId.id
    // }

    // this.data.updatewhishList([...this.WhishList, obj])
  }


}
