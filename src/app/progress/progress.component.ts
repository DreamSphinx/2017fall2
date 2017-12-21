import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';
import { List, Session } from '../models/exercise';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressComponent implements OnInit {

  constructor(private exerciseservice: ExerciseService, private router: Router, private list: List, private session: Session) { }

  ngOnInit() {
    console.log(this.session.progress.toString());
    if(this.list.weight != undefined){
      document.getElementById("weight").innerHTML = this.list.weight;
    }
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

  }

}
