import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from './../shared/shared.module';
import { ExampleModule } from './example/example.module';

// Components
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ExampleModule,
    SharedModule
  ]
})
export class CoreModule { }