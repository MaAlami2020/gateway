import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
//import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ServerModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent
  ],
  providers: [],
  
})
export class AppServerModule { }