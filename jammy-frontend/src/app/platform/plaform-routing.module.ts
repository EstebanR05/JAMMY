import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PlaformRoutingModule { }
