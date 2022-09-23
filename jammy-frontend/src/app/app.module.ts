import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { PlatformModule } from './platform/platform.module';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlatformModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
