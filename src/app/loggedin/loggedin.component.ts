import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoggedinComponent implements OnInit {

  constructor(private router: Router, private header: HeaderComponent) { }

  ngOnInit() {
  }
  
  continueToHome(){
    this.router.navigate(["home"]);
    this.header.ngOnInit();
  }

}
