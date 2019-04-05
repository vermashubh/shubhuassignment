import { Component, OnInit } from '@angular/core';
import { ViewFaqService } from './view-faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  data : any
  constructor( private faqService : ViewFaqService) { }

  ngOnInit() {
    this.faqService.getFaqs({"status":true}).subscribe(response=>{
      this.data= response;
      console.log(response);
    });
  }

}
