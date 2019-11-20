const express = require('express')
const app = express()
const port = 3000
function getRandomArbitrary(min, max) {
  return +Math.round(Math.random() * (max - min) + min);
}

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const TYPES = ['pb', 'lb', 'tlb']
const COLORS = ['red', 'blue', 'green', 'red', 'black', 'yellow', 'orange', 'azure']
const BRANDS = ['volvo', 'scania', 'mercedes', 'man']
const cached_data = []

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


// Fills n examples in cached_data
function fillRandomData(n) {
  for(let i = 0; i < n; i++) {
    createRandomData();
  }
}
//adds single entry in cached data
function createRandomData() {
  const brand = BRANDS[getRandomArbitrary(0,BRANDS.length -1)];
  const randomDate = getRandomDate(new Date(2012, 0, 1), new Date())
  const color = COLORS[getRandomArbitrary(0,COLORS.length -1)];
  const type = TYPES[getRandomArbitrary(0,TYPES.length -1)];


  const car = {
    brand,
    color,
    type,
    registration_date: randomDate,
  }
  cached_data.push(car);
  
}

app.get('/', (req, res) => res.send(''))

/**
 * 
*/
app.get('/data', (req, res) => {
  res.json({data: cached_data})
});

app.listen(port, () => {
  fillRandomData(100);
  setInterval(() => {
    createRandomData();
  }, 5000);
  console.log(`Dashboard car dashboard server on ${port}!`)
})
