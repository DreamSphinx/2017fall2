import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { List, Session } from '../models/exercise';
import { ExerciseService } from '../models/exercise.service'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-inputexe',
  templateUrl: './inputexe.component.html',
  styleUrls: ['./inputexe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputexeComponent implements OnInit {

  constructor(private http: Http, private router: Router, private exerciseservice: ExerciseService, private list: List, private session: Session) { }

  ngOnInit() {
  }
  
  button0Click(){
    if((<HTMLInputElement>document.getElementById("weight")).value != "") {
      this.list.weight = (<HTMLInputElement>document.getElementById("weight")).value + " lbs";
      $("#card0").append('<div>' + this.list.weight + '</div>');
      (<HTMLInputElement>document.getElementById("weight")).value = null;
    }
  }

  button1Click(){
    if((<HTMLInputElement>document.getElementById("situps")).value != "" && (<HTMLInputElement>document.getElementById("time1")).value != "")
    {
        this.list.myArray.push("Sit-ups: " + (<HTMLInputElement>document.getElementById("situps")).value + " at " + (<HTMLInputElement>document.getElementById("time1")).value);
        $("#card1").append('<div>' + this.list.myArray[this.list.myArray.length - 1] + '</div>');
        (<HTMLInputElement>document.getElementById("situps")).value = null;
        (<HTMLInputElement>document.getElementById("time1")).value = null;
    }
  }

  button2Click(){
    if((<HTMLInputElement>document.getElementById("pushups")).value != "" && (<HTMLInputElement>document.getElementById("time2")).value != "") 
    {
      this.list.myArray.push("Push-ups: " + (<HTMLInputElement>document.getElementById("pushups")).value  + " at " + (<HTMLInputElement>document.getElementById("time2")).value);
      $("#card1").append('<div>' + this.list.myArray[this.list.myArray.length - 1] + '</div>');
      (<HTMLInputElement>document.getElementById("pushups")).value = null;
      (<HTMLInputElement>document.getElementById("time2")).value = null;
    }
  } 

  button3Click(){
    if((<HTMLInputElement>document.getElementById("runningtime")).value != "" && (<HTMLInputElement>document.getElementById("time3")).value != "")
    {
      this.list.myArray.push("Running Time: " + (<HTMLInputElement>document.getElementById("runningtime")).value + " minutes at "  + (<HTMLInputElement>document.getElementById("time3")).value);
      $("#card1").append('<div>' + this.list.myArray[this.list.myArray.length - 1] + '</div>');
      (<HTMLInputElement>document.getElementById("runningtime")).value = null;
      (<HTMLInputElement>document.getElementById("time3")).value = null;
    }
  } 

  button4Click(){
    if((<HTMLInputElement>document.getElementById("lunges")).value != "" && (<HTMLInputElement>document.getElementById("time4")).value != "") 
    {
      this.list.myArray.push("Lunges: " + (<HTMLInputElement>document.getElementById("lunges")).value + " at " + (<HTMLInputElement>document.getElementById("time4")).value);
      $("#card1").append('<div>' + this.list.myArray[this.list.myArray.length - 1] + '</div>');
      (<HTMLInputElement>document.getElementById("lunges")).value = null;
      (<HTMLInputElement>document.getElementById("time4")).value = null;
    }
  }

  button5Click(){
    if((<HTMLInputElement>document.getElementById("benchpressesweight")).value != "" && (<HTMLInputElement>document.getElementById("benchpressesnum")).value != "" && (<HTMLInputElement>document.getElementById("time5")).value != "") 
    {
      this.list.myArray.push("Bench Presses: " + (<HTMLInputElement>document.getElementById("benchpressesnum")).value + " at "
        + (<HTMLInputElement>document.getElementById("benchpressesweight")).value + " lbs at " + (<HTMLInputElement>document.getElementById("time5")).value);
      $("#card1").append('<div>' + this.list.myArray[this.list.myArray.length - 1] + '</div>');
      (<HTMLInputElement>document.getElementById("benchpressesweight")).value = null;
      (<HTMLInputElement>document.getElementById("benchpressesnum")).value = null;
      (<HTMLInputElement>document.getElementById("time5")).value = null;
    }
  }

  submitProgress(){
    this.exerciseservice.submitProgress(this.list);
    this.router.navigate(["/progress"]);
  }
}
