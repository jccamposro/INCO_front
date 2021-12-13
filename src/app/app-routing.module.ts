import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    InfluencerCalificationsComponent
} from './components/influencer-califications/influencer-califications.component';
import { InfluencerColabComponent } from './components/influencer-colab/influencer-colab.component';
import { InfluencerConfComponent } from './components/influencer-conf/influencer-conf.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilInfluencerComponent } from './components/perfil-influencer/perfil-influencer.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterInfluencerComponent } from './components/register-influencer/register-influencer.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import {
    EntrepreneurCalificationsComponent
} from './components/entrepreneur-califications/entrepreneur-califications.component';
import { EntrepreneurColabComponent } from './components/entrepreneur-colab/entrepreneur-colab.component';
import { EntrepreneurConfComponent } from './components/entrepreneur-conf/entrepreneur-conf.component';
import { PerfilEntrepreneurComponent } from './components/perfil-entrepreneur/perfil-entrepreneur.component';
import { HomeGuard } from './guards/home.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    {path: 'registro', component: RegisterComponent, canActivate: [LoginGuard]},
    {path: 'resetPass', component: ResetPassComponent, canActivate: [LoginGuard]},
    {path: 'registro_influencer', component: RegisterInfluencerComponent, canActivate: [HomeGuard]},
    {path: 'registro_company', component: RegisterCompanyComponent, canActivate: [HomeGuard]},
    {path: 'profile', component: PerfilInfluencerComponent, canActivate: [HomeGuard]},
    {path: 'colab', component: InfluencerColabComponent, canActivate: [HomeGuard]},
    {path: 'calification', component: InfluencerCalificationsComponent, canActivate: [HomeGuard]},
    {path: 'config', component: InfluencerConfComponent, canActivate: [HomeGuard]},
    {path: 'profile_entrepreneur', component: PerfilEntrepreneurComponent, canActivate: [HomeGuard]},
    {path: 'entrepreneur_colab', component: EntrepreneurColabComponent, canActivate: [HomeGuard]},
    {path: 'entrepreneur_califications', component: EntrepreneurCalificationsComponent, canActivate: [HomeGuard]},
    {path: 'entrepreneur_config', component: EntrepreneurConfComponent, canActivate: [HomeGuard]},

    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
