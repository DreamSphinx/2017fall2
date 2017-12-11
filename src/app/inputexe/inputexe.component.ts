import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { List } from '../models/exercise';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-inputexe',
  templateUrl: './inputexe.component.html',
  styleUrls: ['./inputexe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputexeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list = new List();
  
  button1Click(){
    if((<HTMLInputElement>document.getElementById("situps")).value != "" && (<HTMLInputElement>document.getElementById("time1")).value != "")
    {
        this.list.myArray.push("Sit-ups: " + (<HTMLInputElement>document.getElementById("situps")).value + " at " + (<HTMLInputElement>document.getElementById("time1")).value + "<br>");
        $("#card1").append('<span>' + this.list.myArray[this.list.myArray.length - 1] + '</span>');
        (<HTMLInputElement>document.getElementById("situps")).value = null;
        (<HTMLInputElement>document.getElementById("time1")).value = null;
    }
  }

  button2Click(){
    if((<HTMLInputElement>document.getElementById("pushups")).value != "" && (<HTMLInputElement>document.getElementById("time2")).value != "") 
    {
      this.list.myArray.push("Push-ups: " + (<HTMLInputElement>document.getElementById("pushups")).value  + " at " + (<HTMLInputElement>document.getElementById("time2")).value + "<br>");
      $("#card1").append('<span>' + this.list.myArray[this.list.myArray.length - 1] + '</span>');
      (<HTMLInputElement>document.getElementById("pushups")).value = null;
      (<HTMLInputElement>document.getElementById("time2")).value = null;
    }
  } 

  button3Click(){
    if((<HTMLInputElement>document.getElementById("runningtime")).value != "" && (<HTMLInputElement>document.getElementById("time3")).value != "")
    {
      this.list.myArray.push("Running Time: " + (<HTMLInputElement>document.getElementById("runningtime")).value + " minutes at "  + (<HTMLInputElement>document.getElementById("time3")).value + "<br>");
      $("#card1").append('<span>' + this.list.myArray[this.list.myArray.length - 1] + '</span>');
      (<HTMLInputElement>document.getElementById("runningtime")).value = null;
      (<HTMLInputElement>document.getElementById("time3")).value = null;
    }
  } 

  button4Click(){
    if((<HTMLInputElement>document.getElementById("lunges")).value != "" && (<HTMLInputElement>document.getElementById("time4")).value != "") 
    {
      this.list.myArray.push("Lunges: " + (<HTMLInputElement>document.getElementById("lunges")).value + " at " + (<HTMLInputElement>document.getElementById("time4")).value  + "<br>");
      $("#card1").append('<span>' + this.list.myArray[this.list.myArray.length - 1] + '</span>');
      (<HTMLInputElement>document.getElementById("lunges")).value = null;
      (<HTMLInputElement>document.getElementById("time4")).value = null;
    }
  }

  button5Click(){
    if((<HTMLInputElement>document.getElementById("benchpressesweight")).value != "" && (<HTMLInputElement>document.getElementById("benchpressesnum")).value != "" && (<HTMLInputElement>document.getElementById("time5")).value != "") 
    {
      this.list.myArray.push("Bench Presses: " + (<HTMLInputElement>document.getElementById("benchpressesnum")).value + " at "
        + (<HTMLInputElement>document.getElementById("benchpressesweight")).value + " lbs at " + (<HTMLInputElement>document.getElementById("time5")).value + "<br>");
      $("#card1").append('<span>' + this.list.myArray[this.list.myArray.length - 1] + '</span>');
      (<HTMLInputElement>document.getElementById("benchpressesweight")).value = null;
      (<HTMLInputElement>document.getElementById("benchpressesnum")).value = null;
      (<HTMLInputElement>document.getElementById("time5")).value = null;
    }
  }
}
