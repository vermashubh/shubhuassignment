import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

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
