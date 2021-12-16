import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//services

import { ScriptsLoadService } from "./scripts-load.service";

//Services end

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
import { InfluencerAccountComponent } from './components/influencer-account/influencer-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EntrepreneurProfileComponent } from './components/entrepreneur-profile/entrepreneur-profile.component';
import {
    EntrepreneurCollaborationComponent
} from './components/entrepreneur-collaboration/entrepreneur-collaboration.component';
import { EntrepreneurScoreComponent } from './components/entrepreneur-score/entrepreneur-score.component';
import { EntrepreneurAccountComponent } from './components/entrepreneur-account/entrepreneur-account.component';
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
        InfluencerAccountComponent,
        EntrepreneurProfileComponent,
        EntrepreneurCollaborationComponent,
        EntrepreneurScoreComponent,
        EntrepreneurAccountComponent,
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
        },
        ScriptsLoadService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
