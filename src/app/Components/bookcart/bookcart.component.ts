import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/Services/Bookservice/bookservice.service';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';


@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.scss']
})
export class BookcartComponent implements OnInit {
newdata:any
IdData:any
booklenght:any
searchString:any=''

  constructor(private services:BookserviceService,private router:Router,private data:DataserviceService) { }

@Output() count=new EventEmitter<any>();
  ngOnInit(): void {
    this.data.currsearchdata.subscribe(search=>{
      this.searchString=search;
      console.log(search);
      
    })
   setTimeout(()=>{
    
    this.newdata=this.data.Books;
    this.booklenght=this.data.Books.length;
    console.log(this.data.Books)
   
   }, 100)

      this.count.emit(this.newdata.length);

    }

   
  

  navigatetobook(id:any){
    this.router.navigate(['/books',id]);
    this.IdData=id;
    console.log(this.IdData);
    this.services.BookId=this.IdData

  }

 
  


}
