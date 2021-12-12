import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerCalificationsComponent } from './components/influencer-califications/influencer-califications.component';
import { InfluencerColabComponent } from './components/influencer-colab/influencer-colab.component';
import { InfluencerConfComponent } from './components/influencer-conf/influencer-conf.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilInfluencerComponent } from './components/perfil-influencer/perfil-influencer.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterInfluencerComponent } from './components/register-influencer/register-influencer.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';

const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: 'resetPass', component: ResetPassComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro_influencer', component: RegisterInfluencerComponent },
  { path: 'registro_company', component: RegisterCompanyComponent },
  { path: 'profile', component: PerfilInfluencerComponent },
  { path: 'colab', component: InfluencerColabComponent },
  { path: 'calification', component: InfluencerCalificationsComponent },
  { path: 'config', component: InfluencerConfComponent },

  { path: '**', pathMatch:'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
