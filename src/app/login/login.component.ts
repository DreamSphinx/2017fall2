import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';
import { User, Session } from '../models/exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    name:string;
    password: string;


    constructor(private exercise: ExerciseService, private router: Router) { }

    ngOnInit() {
    }
    
    login(){
        this.exercise.login(this.name, this.password)
    }

    loginFB(){
        this.exercise.loginFB();
    }
}