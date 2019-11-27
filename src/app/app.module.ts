import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
      AppComponent,
      LinechartComponent,
      FilterComponent,
      TableComponent,
  ],
  providers: [DataService],
  imports: [
      BrowserModule,GoogleChartsModule, HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
