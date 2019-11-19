import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent  {
  @Input() widget;
  @Output() refreshData = new EventEmitter<boolean>();
  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }
  sendRefresh() {
    this.refreshData.emit(true);
  }
  getNumberOfYears() {
    return this.helperService.getNumberOfYears(this.widget)
  }
  getMeanValues() {
    return this.helperService.getMeanValues(this.widget)
  }

}
