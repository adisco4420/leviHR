import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePflMgtRoutingModule } from './employee-pfl-mgt-routing.module';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeePflMgtRoutingModule,
    CoreModule
  ],
  declarations: [EmployeeComponent]
})
export class EmployeePflMgtModule { }
