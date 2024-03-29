import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/model/Books';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  button:boolean=false

  Books:any=[]
  Carts:Cart[]=[]
  Whishlist:any=[]

  private sharedValueSubject = new BehaviorSubject<any>('');
  public  sharedValue$ = this.sharedValueSubject.asObservable();

  updateSharedValue(newValue: any) {
      this.sharedValueSubject.next(newValue);
  }

  private bookList=new BehaviorSubject<any>([]);
  currBookList=this.bookList.asObservable();

  updateBookList(newValue:any){
    this.bookList.next(newValue);
  }

  private searchdata=new BehaviorSubject<any>('');
  currsearchdata=this.searchdata.asObservable();

  updateSearch(newValue:any){
    this.searchdata.next(newValue);
  }

  private addressdata=new BehaviorSubject<any>([]);
  curraddressdata=this.addressdata.asObservable();

  updateAddress(newValue:any){
    this.addressdata.next(newValue);
  }

  private cartList=new BehaviorSubject<any>([]);
  currCartList=this.cartList.asObservable();

  updateCartList(newValue:any){
    this.cartList.next(newValue);
  }

  private whishList=new BehaviorSubject<any>([]);
  currWhishList=this.whishList.asObservable();

  updatewhishList(newValue:any){
    this.whishList.next(newValue);
  }

  

}
