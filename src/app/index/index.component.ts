import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, Session } from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';
import { Http } from "@angular/http";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  session = new Session();
  me: User;

  constructor(private exerciseservice: ExerciseService, private http: Http) { }

  ngOnInit() {
    this.me = this.exerciseservice.me;
    setInterval(()=> this.update(), 1000)
  }

  update(){
    this.http.get(this.exerciseservice.apiRoot + "/exercise/session").subscribe( data =>{
        this.session = data.json();
    });
}

}
