import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  brandFilter = null;
  stream: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  startStream() {
    setInterval(() => {
      this.http.get('http://localhost:3000/data').subscribe((data) => {
        this.stream.next(data)
      });
    }, 1000)
  }
  // Takes array of data. Returns grouped data, [[brand,value]]
  prepareForChart(data) {
    // Guard clause.
    if (data === undefined) {
      return [];
    }
    //Filter first
    let filteredData = data;
    if (this.brandFilter) {
       filteredData = data.filter((car) => {
        return this.brandFilter === car.brand
      })
    }

    const obj = {}
    for (let car of filteredData) {
      if (!obj[car.brand]) {
        obj[car.brand] = 0;
      }
      obj[car.brand] = obj[car.brand] + 1
    }
    let res = []
    for (let brand in obj) {
      const value = obj[brand];
      res.push([brand, value])
    }
    return res;
  }
  filterOnBrand(brand) {
    this.brandFilter = brand;
  }
  getStream() {
    return this.stream;
  }
  loadData() {
  }
}
