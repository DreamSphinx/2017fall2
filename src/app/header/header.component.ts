import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ExerciseService } from "../models/exercise.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  constructor(private exerciseservice: ExerciseService) { 
    this.loggedIn = exerciseservice.loggedIn;
    console.log(exerciseservice.loggedIn);
  }

  ngOnInit() {
    
  }
  
}
