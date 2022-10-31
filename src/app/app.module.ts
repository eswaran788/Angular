import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
// import { LoginComponent } from './components/Form/login/login.component';
import { CapitalComponent } from './components/Capital accout/capital/capital.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { ReportsComponent } from './components/Reports/reports/reports.component';
import { InsightsComponent } from './components/Insights/insights/insights.component';
import { DocumentsComponent } from './components/Documents/documents/documents.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    CapitalComponent,
    DashboardComponent,
    ReportsComponent,
    InsightsComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
