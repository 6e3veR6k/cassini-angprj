import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from "./primeng.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { ActListComponent } from './components/act-list/act-list.component';
import { ActsDetailsComponent } from './components/acts-details/acts-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParametersComponent,
    ActListComponent,
    ActsDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
