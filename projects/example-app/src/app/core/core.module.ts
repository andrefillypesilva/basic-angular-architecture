import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from './../shared/shared.module';
import { ExampleModule } from './example/example.module';
import { AccountModule } from './account/account.module';

// Components
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivateComponent } from './private/private.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ExampleModule,
    AccountModule,
    SharedModule
  ],
  exports: [SharedModule]
})
export class CoreModule { }
