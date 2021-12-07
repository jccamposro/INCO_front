import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterInfluencerComponent } from './register-influencer/register-influencer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro/influencer', component: RegisterInfluencerComponent },
  { path: 'registro/company', component: RegisterCompanyComponent },

  { path: '**', pathMatch:'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
