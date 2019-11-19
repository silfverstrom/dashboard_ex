import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  widgetData;
  constructor(private dashboardService: DashboardService) {
    this.widgetData = this.dashboardService.getData();
  }

  loadData() {
    this.dashboardService.loadData();
    this.widgetData = this.dashboardService.getData();

  }

}
