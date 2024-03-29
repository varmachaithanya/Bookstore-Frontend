import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
bookcount:any
  constructor() { }

  ngOnInit(): void {
  }

  handleEvent(data:any){
    this.bookcount=data

  }

}
