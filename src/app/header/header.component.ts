import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {loggedIn} from "../models/exercise.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}