import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

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
    const obj = {}
    for (let car of data) {
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
  filter() {
    const filteredData = this.stream.data.getValue().filter((val) => {
      return val.brand == 'volvo'
    })
    this.stream.next(filteredData)
  }
  getStream() {
    return this.stream;
  }
  loadData() {
  }
}
