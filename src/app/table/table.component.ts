import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableData = [];
  pages = [];
  total = 0;
  startPage = 0;
  constructor(private dataService: DataService) { }
  setStartPage(page) {
    this.startPage = page;
  }
  ngOnInit() {
    this.dataService.getStream().subscribe((res) => {
      console.log('res', res)
      if (!res || !res.data) return;
      let capped = [];
      for(let i = this.startPage; i < 20; i++) {
        capped.push(res.data[i])
      }
      this.tableData = capped;
      this.total = Math.round(res.data.length / 20);
      let pages = []
      for(let i = 0; i <= this.total; i++) {
        pages.push(i);
      }
      this.pages = pages;
    })
  }

}
