import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePflMgtRoutingModule } from './employee-pfl-mgt-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeePflMgtRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeComponent, AddEmployeeComponent]
})
export class EmployeePflMgtModule { }
