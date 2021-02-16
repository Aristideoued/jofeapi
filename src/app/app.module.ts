import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ApiComponent } from './api/api.component';
import { ViewapiComponent } from './viewapi/viewapi.component';
import { ApimenuComponent } from './apimenu/apimenu.component';
import { NgxStripeModule } from '@nomadreservations/ngx-stripe';
import { PaymentComponent } from './payment/payment.component';
import { TraceComponent } from './trace/trace.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    ViewapiComponent,
    ApimenuComponent,
    PaymentComponent,
    TraceComponent,
    LoginComponent,
  


  ],
  imports: [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatIconModule,
  NgxStripeModule.forRoot('')

  ],
  providers: [ApiService,ApimenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
