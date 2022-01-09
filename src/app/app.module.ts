import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EntrepreneurCreateComponent } from './components/entrepreneur-create/entrepreneur-create.component';
import { MainPageComponent } from './components/main-page/main-page.component';


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
        LayoutComponent,
        EntrepreneurCreateComponent,
        MainPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSlideToggleModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(),
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
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
