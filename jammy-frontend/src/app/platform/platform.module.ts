import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { PlaformRoutingModule } from './plaform-routing.module';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileHomeComponent } from './profile/components/profile-home/profile-home.component';
import { ProfileHomeworkComponent } from './profile/components/profile-homework/profile-homework.component';
import { ProfileTableComponent } from './profile/components/profile-table/profile-table.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileListComponent,
    ProfileHomeComponent,
    ProfileHomeworkComponent,
    ProfileTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PlaformRoutingModule
  ],
})
export class PlatformModule { }
