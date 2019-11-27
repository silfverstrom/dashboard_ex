import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
      AppComponent,
      LinechartComponent,
  ],
  imports: [
  BrowserModule,GoogleChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
