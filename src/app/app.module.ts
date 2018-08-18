import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { dashboardComponent } from './dashboard/dashboard.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { accessroleComponent } from './accessrole/accessrole.component';
import { applicationComponent } from './application/application.component';
import { auditlogComponent } from './auditlog/auditlog.component';
import { employeeComponent } from './employee/employee.component';
import { packageComponent } from './package/package.component';
import { pricingComponent } from './pricing/pricing.component';
import { reportsComponent } from './reports/reports.component';
import { senderComponent } from './sender/sender.component';
import { shipmentagentsComponent } from './shipmentagents/shipmentagents.component';
import { vehicleComponent } from './vehicle/vehicle.component';
import { vehicletypeComponent } from './vehicletype/vehicletype.component';

@NgModule({
  declarations: [
    AppComponent,
    dashboardComponent,
    accessroleComponent,
    applicationComponent,
    auditlogComponent,
    employeeComponent,
    packageComponent,
    pricingComponent,
    reportsComponent,
    senderComponent,
    shipmentagentsComponent,
    vehicleComponent,
    vehicletypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }), 
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
