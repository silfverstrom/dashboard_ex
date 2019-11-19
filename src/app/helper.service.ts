import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  getNumberOfYears(widget) {
    return widget.data.length;
  }
  getMeanValues(widget) {
    const values =
      widget.data.map((row) => row.value)
    const sum = values.reduce((a,b) => {
      return a + b
    },0)
    const length = this.getNumberOfYears(widget)
    return Math.round(sum/length)
  }

}
