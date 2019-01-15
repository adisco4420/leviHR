import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'employee/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeePflMgtRoutingModule { }
