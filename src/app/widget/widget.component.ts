import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent  {
  @Input() widget;
  @Output() refreshData = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  sendRefresh() {
    this.refreshData.emit(true);
  }
  getNumberOfYears() {
    return this.widget.data.length;
  }
  getMeanValues() {
    const values =
      this.widget.data.map((row) => row.value)
    const sum = values.reduce((a,b) => {
      return a + b
    },0)
    const length = this.getNumberOfYears()
    return Math.round(sum/length)
  }

}
