import { Injectable } from '@angular/core';
import { loadData } from '../utils/data_helpers'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  data;
  constructor() {
    this.loadData()
  }
  getData() {
    return this.data;
  }
  loadData() {
    this.data = loadData()

  }
}
