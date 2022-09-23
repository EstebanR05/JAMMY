import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'principal', component: PrincipalComponent },
      ]
    }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ComponentsRoutingModule { }
