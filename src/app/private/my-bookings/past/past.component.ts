import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  getColor(status){
    switch(status){
      case 'STARTED':
      return 'green';
      case 'PENDING':
      return 'red';
      case 'ON THE WAY':
      return '#0099ff'
    }
  }
  data : any;
  constructor(private bookingService : BookingService) { }

  ngOnInit() {
    this.bookingService.getBookings({"upcoming":true}).subscribe(response=>{
      this.data= response;
    });
  }

}