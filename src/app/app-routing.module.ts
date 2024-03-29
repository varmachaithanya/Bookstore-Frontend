import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { BookcartComponent } from './Components/bookcart/bookcart.component';
import { CartComponent } from './Components/cart/cart.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { WhishlistComponent } from './Components/whishlist/whishlist.component';
import { AddressComponent } from './Components/address/address.component';
import { OrdersucessComponent } from './ordersucess/ordersucess.component';
import { OrdersComponent } from './orders/orders.component';
import { PersonaldetailsComponent } from './Components/personaldetails/personaldetails.component';

const routes: Routes = [
  {path:'',component:DashBoardComponent,children:[
    {path:'carts',component:BookcartComponent},
    {path:'books/:id',component:BookDetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'whishlist',component:WhishlistComponent},
    {path:'address',component:AddressComponent},
    {path:'orders',component:OrdersComponent},
    {path:'ordersucess',component:OrdersucessComponent},
    {path:'personaldetails',component:PersonaldetailsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


