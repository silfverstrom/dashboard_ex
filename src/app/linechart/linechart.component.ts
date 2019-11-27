import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
   title = 'Total registrations per brand';
   type = 'ColumnChart';
   data = [
      ['Volvo', 10.0],
      ['Mercedes', 26],
      ['MAN', 2],
      ['Scania', 12],
   ];
   columnNames = ['Brand', 'Total'];
   options = {    
   };
   width = 550;
   height = 400;

  constructor() { }

  ngOnInit() {
  }

}
