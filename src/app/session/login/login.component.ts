import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";



@Component({
   selector: 'ms-login-session',
   templateUrl:'./login-component.html',
   styleUrls: ['./login-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
	

  email: string;
  password: string;

  constructor(
    private router: Router
  ) { 
  this.carousel();  
  }

  carousel() {
    // var i;
    // var x = document.getElementsByClassName("mySlides");
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.display = "none"; 
    // }
    // slideIndex++;
    // if (slideIndex > x.length) {slideIndex = 1} 
    // x[slideIndex-1].style.display = "block"; 
    // setTimeout(carousel, 2000); // Change image every 2 seconds
}

  login() {
    this.router.navigate(['/dashboard']);
  }
	
}



