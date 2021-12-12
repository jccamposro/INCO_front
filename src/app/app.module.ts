import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterInfluencerComponent } from './register-influencer/register-influencer.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { PerfilInfluencerComponent } from './perfil-influencer/perfil-influencer.component';
import { InfluencerColabComponent } from './influencer-colab/influencer-colab.component';
import { InfluencerCalificationsComponent } from './influencer-califications/influencer-califications.component';
import { InfluencerConfComponent } from './influencer-conf/influencer-conf.component';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
