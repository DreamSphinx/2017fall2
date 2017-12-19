import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExerciseService } from "../models/exercise.service"
import { User } from '../models/exercise';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  user: User
  isLoggedIn: boolean;

  constructor(private exerciseservice: ExerciseService, private signin: LoginComponent) { 
  }

  ngOnInit() {
    
    this.user = this.exerciseservice.me;
    if(this.user != null){
      this.isLoggedIn = true;
      console.log("Is logged in = " + this.isLoggedIn);
    }
    else if(this.user == null){
      this.isLoggedIn = false;
      console.log("Is logged in = " + this.isLoggedIn)
    } 
  }

  logout(){
    this.exerciseservice.logout();
    this.ngOnInit();
  }
  
}
