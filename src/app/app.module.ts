import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';

import { HelperService } from './helper.service';
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      WidgetComponent,
  ],
  providers: [
    HelperService,
    DashboardService,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
