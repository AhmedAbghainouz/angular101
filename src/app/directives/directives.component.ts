import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule , FilterPipe ],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'], // Corrected property name
})
export class DirectivesComponent {
  classes = {
    green: true,
    red: false,
    underline: true
  };

  people = [
    { name: 'ahmed', age: 21 },
    { name: 'youssef', age: 20 },
    { name: 'fadi', age: 20 },
    { name: 'hafid', age: 19 },
    { name: 'hamza', age: 21 },
    { name: 'amin', age: 20 },
    { name: 'simo', age: 20 },
    { name: 'yassin', age: 19 },
  ];
  constructor() { }

  ngOnInit() {

  }
   term = '' ;

}
