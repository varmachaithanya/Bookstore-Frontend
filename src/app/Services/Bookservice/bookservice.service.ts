import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  userurl='https://localhost:7020/api/User/'
  loginurl='https://localhost:7020/api/Book/';
  carturl='https://localhost:7020/api/CartControoler/';
  whishlisturl='https://localhost:7020/api/Whishlist/';
  addressurl='https://localhost:7020/api/Address/';
  orderurl='https://localhost:7020/api/Order/';

  BookId:any;

  constructor(private http:HttpClient) { }

  loginUser(endpoint:any):Observable<any>{
    return this.http.put(this.userurl+'Login',{
      emailId:endpoint.email,
      password:endpoint.password
    
    },
    {
      responseType:'text',
    });
  }

  getdata():Observable<any[]>{
    return this.http.get<any[]>(this.loginurl + 'GetAllBooks')

  }

  getdatabyid(endpoint:any):Observable<any[]>{
    return this.http.get<any[]>(this.loginurl + `GetById?id=${endpoint}`
  )}

  getcartdata(endpoint:any):Observable<any[]>{
    return this.http.get<any[]>(this.carturl + `GetCard?userid=${endpoint}`)
  }

  getwhishlistdata(endpoint:any):Observable<any[]>{
    return this.http.get<any[]>(this.whishlisturl + `GetWhishList?userid=${endpoint}`)
  }

  addcart(endpoint:any){
    debugger
    return this.http.post(this.carturl+`AddToCart?userid=${endpoint.id}`,{
      quantity:endpoint.data.quantity,
      bookid:endpoint.data.bookid
    },)
  }

  deletecart(endpoint:any){
    return this.http.post(this.carturl+'DeleteCart',endpoint)
  }

  deletewhishlist(endpoint:any){
    return this.http.post(this.whishlisturl+'DeleteWhishList',endpoint)
  }

  addtowhishlist(endpoint:any){
    return this.http.post(this.whishlisturl+'AddToWishList',endpoint)
  }

  updatecart(endpoint:any){
    return this.http.put(this.carturl+`UpdateQuantity?userid=${localStorage.getItem('id')}`,{
      quantity:endpoint.quantity,
      bookid:endpoint.bookid
    })
  }

  getaddress(){
    return this.http.get(this.addressurl+`GetAddress?userid=${localStorage.getItem('id')}`)
  }

  addorder(endpoint:any){
    return this.http.post(this.orderurl+`AddOrder?userid=${localStorage.getItem('id')}`,{
      quantity:endpoint.quantity,
      bookid:endpoint.bookid
    })  }
}
