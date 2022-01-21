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
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [ LayoutGuard ],
        children: [
            {
                path: 'influencer-profile',
                component: InfluencerProfileComponent
            },
            {
                path: 'influencer-collaboration',
                component: InfluencerCollaborationComponent
            },
            {
                path: 'influencer-score',
                component: InfluencerScoreComponent
            },
            {
                path: 'influencer-settings',
                component: InfluencerSettingsComponent
            },
            {
                path: 'entrepreneur-profile',
                component: EntrepreneurProfileComponent
            },
            {
                path: 'entrepreneur-collaboration',
                component: EntrepreneurCollaborationComponent
            },
            {
                path: 'entrepreneur-score',
                component: EntrepreneurScoreComponent
            },
            {
                path: 'entrepreneur-settings',
                component: EntrepreneurSettingsComponent
            },
            {
                path: 'entrepreneur-create',
                component: EntrepreneurCreateComponent
            },
            {
                path: 'main-page',
                component: MainPageComponent
            },
            {
                path: 'contacts',
                component: ContactsComponent
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
