import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  updateFilter(e) {
    const brand = e.target.value;
    this.dataService.filterOnBrand(brand);
  }

}
