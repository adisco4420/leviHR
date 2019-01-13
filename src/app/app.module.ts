import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: []
})
export class AppModule { }
