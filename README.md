# Exercise - Car Dashboard

In this exercise we are going to build a dashboard that shows car registrations per brand.
In this repository you will find the following utils to help you.

* server.js - a express server with data. GET /data returns JSON data. Every 5
  seconds new data is added to the server
* src/app/linechart.component.ts. A google chart showing mocked data.

## Fetching data
We can fetch data at port 3000 if we run node server.js
```
node server.js
# go to broser localhost:3000/data to see json
```
The data has the following structure
```
{
    data: [
        {
            brand, // volvo, mercedes, scania etc
            type, // pb, lb, tlb (personal car, light truck, heavy truck)
            color, // red green blue etc
            registration_date, // date when car was sold
        }
    ]
}
```

## What should the application do?

The application should show the data from GET /data in a chart and in a table.
The data should also be filterable.

## Great, so how do we do that?

When building angular applications it is a good idea to think how the application could be represented in components.

When designing the application we need 

* LinechartComponent - should show data in chart.
* TableComponent - should list all raw data in a table, and be paged at 20
  entries per page.
* FilterComponent - A component allowing the user to specify a brand, type or
  date to filter data on.
* DashboardComponent - Renders table.component, filter.component, linechart.component
* DataService - Fetches data from server. Should have methods. +loadData()
  +filterPerBrand(brand) +filterPerType(type), +filterPerDate(minDate, maxDate).

## How do i add components and services?

We can do it manually, or use the generator bundled with angular

```
    ng generate component TableComponent
```

