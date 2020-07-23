import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from './../../shared/shared.module';

// Components
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [LoginComponent, AccountComponent, NewAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
