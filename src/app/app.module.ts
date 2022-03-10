import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SigninComponent} from "./signin/signin.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CurrentWeatherComponent} from "./currentweather/currentweather.component";
import {HttpClientModule} from "@angular/common/http";
import {ForecastComponent} from "./forecast/forecast.component";

const appRoutes: Routes =[
  {path:"", component:SigninComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"regiter", component:RegisterComponent},
  {path:"currentweather", component:CurrentWeatherComponent},
  {path:"forecast", component:ForecastComponent},
  ];
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    CurrentWeatherComponent,ForecastComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
