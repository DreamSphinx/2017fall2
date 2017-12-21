import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete"; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  constructor(private exerciseservice: ExerciseService) { 

  }

  public group = [
    CreateNewAutocompleteGroup(
        'Search / choose in / from list',
        'completer',
        [
            {title: 'Option 1', id: '1'},
            {title: 'Option 2', id: '2'},
            {title: 'Option 3', id: '3'},
            {title: 'Option 4', id: '4'},
            {title: 'Option 5', id: '5'},
        ],
        {titleKey: 'title', childrenKey: null}
    ),
  ];

  Selected(item: SelectedAutocompleteItem) {
    console.log(item);
  }

  ngOnInit() {  

  }  
}
