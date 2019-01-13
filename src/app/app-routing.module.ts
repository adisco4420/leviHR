import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: '', loadChildren: './dashboard/employee-pfl-mgt/employee-pfl-mgt.module#EmployeePflMgtModule'},
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
