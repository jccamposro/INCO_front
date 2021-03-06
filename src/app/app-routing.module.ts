import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerScoreComponent } from './components/influencer-score/influencer-score.component';
import {
    InfluencerCollaborationComponent
} from './components/influencer-collaboration/influencer-collaboration.component';
import { InfluencerSettingsComponent } from './components/influencer-settings/influencer-settings.component';
import { LoginComponent } from './components/login/login.component';
import { InfluencerProfileComponent } from './components/influencer-profile/influencer-profile.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterInfluencerComponent } from './components/register-influencer/register-influencer.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { EntrepreneurScoreComponent } from './components/entrepreneur-score/entrepreneur-score.component';
import {
    EntrepreneurCollaborationComponent
} from './components/entrepreneur-collaboration/entrepreneur-collaboration.component';
import { EntrepreneurSettingsComponent } from './components/entrepreneur-settings/entrepreneur-settings.component';
import { EntrepreneurProfileComponent } from './components/entrepreneur-profile/entrepreneur-profile.component';
import { LayoutGuard } from './guards/layout.guard';
import { LoginGuard } from './guards/login.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { EntrepreneurCreateComponent } from './components/entrepreneur-create/entrepreneur-create.component';
import { MainPageComponent } from './services/main-page/main-page.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { DataGuard } from './guards/data.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [ LayoutGuard ],
        children: [
            {
                path: 'influencer-profile',
                canActivate: [DataGuard],
                component: InfluencerProfileComponent
            },
            {
                path: 'influencer-collaboration',
                canActivate: [DataGuard],
                component: InfluencerCollaborationComponent
            },
            {
                path: 'influencer-score',
                canActivate: [DataGuard],
                component: InfluencerScoreComponent
            },
            {
                path: 'influencer-settings',
                canActivate: [DataGuard],
                component: InfluencerSettingsComponent
            },
            {
                path: 'entrepreneur-profile',
                canActivate: [DataGuard],
                component: EntrepreneurProfileComponent
            },
            {
                path: 'entrepreneur-collaboration',
                canActivate: [DataGuard],
                component: EntrepreneurCollaborationComponent
            },
            {
                path: 'entrepreneur-score',
                canActivate: [DataGuard],
                component: EntrepreneurScoreComponent
            },
            {
                path: 'entrepreneur-settings',
                canActivate: [DataGuard],
                component: EntrepreneurSettingsComponent
            },
            {
                path: 'entrepreneur-create',
                canActivate: [DataGuard],
                component: EntrepreneurCreateComponent
            },
            {
                path: 'main-page',
                canActivate: [DataGuard],
                component: MainPageComponent
            },
            {
                path: 'contacts',
                canActivate: [DataGuard],
                component: ContactsComponent
            },
            {
                path: 'show-profile/:id',
                canActivate: [DataGuard],
                component: ShowProfileComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [ LoginGuard ]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [ LoginGuard ]
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [ LoginGuard ]
    },
    {
        path: 'register-influencer',
        component: RegisterInfluencerComponent,
        canActivate: [ LayoutGuard ]
    },
    {
        path: 'register-company',
        component: RegisterCompanyComponent,
        canActivate: [ LayoutGuard ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
