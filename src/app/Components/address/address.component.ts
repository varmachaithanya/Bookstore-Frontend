import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private data:DataserviceService) { }
  // addres:any='BridgeLabz Solutions LLP, No. 42, 14th Main, 15th Cross, Sector 4, Opp to BDA complex, near Kumarakom restaurant'
  // city:any='HSR Layout'
  // state:any='Bangalore'
  addressdata:any={
    address:'',
    city:'',
    state:'',
    type:''
  }
  orders:boolean=true
  address:boolean=true
  removebutton:boolean=true
  editaddress:boolean=true
  name:any
  mobile:any
  @Output() order=new EventEmitter<any>();

  ngOnInit(): void {
    this.name=localStorage.getItem('fullName');
    this.mobile=localStorage.getItem('mobile')
    this.data.curraddressdata.subscribe(result=>{
      debugger
      this.addressdata=result;
    })
  }

  gotoorders(){
    this.order.emit(this.orders)
    this.removebutton=false;
  }

  handleaddress(){
    this.address=false
  }

  edit(){
    this.editaddress=false;
  }
  cancel(){
    this.editaddress=true;
  }

}
