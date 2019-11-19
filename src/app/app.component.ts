import { Component } from '@angular/core';
import { loadData } from '../utils/data_helpers'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor() {
    this.data = loadData();
    console.log(this.data);
  }
}
