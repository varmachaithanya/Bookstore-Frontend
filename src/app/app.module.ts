import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BookcartComponent } from './Components/bookcart/bookcart.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './Components/cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';
import { DataserviceService } from './Services/dataservice/dataservice.service';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LogincomponentComponent } from './Components/logincomponent/logincomponent.component';
import { SignupcomponentComponent } from './Components/signupcomponent/signupcomponent.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { WhishlistComponent } from './Components/whishlist/whishlist.component';
import { AddressComponent } from './Components/address/address.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrdersComponent } from './orders/orders.component';
import { OrdersucessComponent } from './ordersucess/ordersucess.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PersonaldetailsComponent } from './Components/personaldetails/personaldetails.component';
import { SearchpipecomponentPipe } from './searchpipecomponent.pipe';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashBoardComponent,
    BookcartComponent,
    BookDetailsComponent,
    CartComponent,
    LoginSignupComponent,
    LogincomponentComponent,
    SignupcomponentComponent,
    WhishlistComponent,
    AddressComponent,
    OrdersComponent,
    OrdersucessComponent,
    OrdersummaryComponent,
    PersonaldetailsComponent,
    SearchpipecomponentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatBadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatRadioModule
    


    

  ],
  providers: [DataserviceService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
