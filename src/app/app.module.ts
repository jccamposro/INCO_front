import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterInfluencerComponent } from './components/register-influencer/register-influencer.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { InfluencerProfileComponent } from './components/influencer-profile/influencer-profile.component';
import {
    InfluencerCollaborationComponent
} from './components/influencer-collaboration/influencer-collaboration.component';
import { InfluencerScoreComponent } from './components/influencer-score/influencer-score.component';
import { InfluencerSettingsComponent } from './components/influencer-settings/influencer-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EntrepreneurProfileComponent } from './components/entrepreneur-profile/entrepreneur-profile.component';
import {
    EntrepreneurCollaborationComponent
} from './components/entrepreneur-collaboration/entrepreneur-collaboration.component';
import { EntrepreneurScoreComponent } from './components/entrepreneur-score/entrepreneur-score.component';
import { EntrepreneurSettingsComponent } from './components/entrepreneur-settings/entrepreneur-settings.component';
import { IncoInterceptor } from './interceptors/inco.interceptor';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        RegisterCompanyComponent,
        RegisterInfluencerComponent,
        ResetPasswordComponent,
        InfluencerProfileComponent,
        InfluencerCollaborationComponent,
        InfluencerScoreComponent,
        InfluencerSettingsComponent,
        EntrepreneurProfileComponent,
        EntrepreneurCollaborationComponent,
        EntrepreneurScoreComponent,
        EntrepreneurSettingsComponent,
        LayoutComponent
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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: IncoInterceptor,
            multi: true
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
