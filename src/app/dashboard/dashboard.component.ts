import { Component, OnInit } from '@angular/core';
import { loadData } from '../../utils/data_helpers'
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  widgetData;
  constructor() {
    this.widgetData = loadData();
  }

  loadData() {
    this.widgetData = loadData();
  }

}
