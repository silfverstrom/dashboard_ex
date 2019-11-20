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
  getStream() {
    return this.stream;
  }
  loadData() {

  }
}
