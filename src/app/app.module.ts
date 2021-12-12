import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterInfluencerComponent } from './components/register-influencer/register-influencer.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { PerfilInfluencerComponent } from './components/perfil-influencer/perfil-influencer.component';
import { InfluencerColabComponent } from './components/influencer-colab/influencer-colab.component';
import { InfluencerCalificationsComponent } from './components/influencer-califications/influencer-califications.component';
import { InfluencerConfComponent } from './components/influencer-conf/influencer-conf.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RegisterCompanyComponent,
    RegisterInfluencerComponent,
    ResetPassComponent,
    PerfilInfluencerComponent,
    InfluencerColabComponent,
    InfluencerCalificationsComponent,
    InfluencerConfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
