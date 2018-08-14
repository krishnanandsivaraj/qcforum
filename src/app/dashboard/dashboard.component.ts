import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import {fadeInAnimation} from "../core/route-animation/route.animation";

@Component({
    selector: 'ms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        "[@fadeInAnimation]": 'true'
    },
    animations: [ fadeInAnimation ]
})
export class DashboardComponent  implements OnInit{

  	selectedIndex: number = 0;

    constructor(private pageTitleService: PageTitleService) {}

    ngOnInit() {
      this.pageTitleService.setTitle("Form Wizard");
    }


  	nextStep() {
    	this.selectedIndex += 1;
  	}

  	previousStep() {
    	this.selectedIndex -= 1;
  	}   
}




