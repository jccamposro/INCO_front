import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerCalificationsComponent } from './influencer-califications/influencer-califications.component';
import { InfluencerColabComponent } from './influencer-colab/influencer-colab.component';
import { InfluencerConfComponent } from './influencer-conf/influencer-conf.component';
import { LoginComponent } from './login/login.component';
import { PerfilInfluencerComponent } from './perfil-influencer/perfil-influencer.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterInfluencerComponent } from './register-influencer/register-influencer.component';
import { RegisterComponent } from './register/register.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: 'resetPass', component: ResetPassComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro/influencer', component: RegisterInfluencerComponent },
  { path: 'registro/company', component: RegisterCompanyComponent },
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
