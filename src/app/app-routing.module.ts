import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {LoginComponent} from './components/Form/login/login.component'
import {DashboardComponent} from './components/Dashboard/dashboard/dashboard.component'
import {CapitalComponent} from './components/Capital accout/capital/capital.component'
import {DocumentsComponent} from './components/Documents/documents/documents.component'
import {InsightsComponent} from './components/Insights/insights/insights.component'
import {ReportsComponent} from './components/Reports/reports/reports.component'

const routes: Routes = [
  // {path:'login', component: LoginComponent},
  {path:'Dashboard', component: DashboardComponent},
  {path:'CapitalComponent', component: CapitalComponent},
  {path:'DocumentsComponent', component: DocumentsComponent},
  {path:'InsightsComponent', component: InsightsComponent},
  {path:'ReportsComponent', component: ReportsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
