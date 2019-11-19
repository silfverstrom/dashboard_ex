import { BehaviorSubject } from 'rxjs';


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export function loadData() {
    const randomYears = getRandomArbitrary(2, 20)
    const data = []
    const startYear = 2000;
    for(let i= 0; i < randomYears; i++) {
        const value = Math.round(getRandomArbitrary(0, 1000));
        const year = startYear + i;
        data.push({ year, value})
    }

    return [
    {name: 'Widget1', type: 'table', data: data},
    {name: 'Widget2', type: 'mean', data: data}
    ]
}

export class StreamingData {
    subject: BehaviorSubject<any>;
    constructor() {
        this.subject = new BehaviorSubject<any>([]);
    }
    startStreamingData() {
        setInterval(() => {
            const data = loadData();
            this.subject.next(data);
        }, 1000);
    }

    getStream() {
        return this.subject;
    }
}


export interface Data {
    year: number[];
    value: number[];
}
