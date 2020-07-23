import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';

// Guard
import { DirtyFormGuard } from './../../shared/guards/dirty-form.guard';

const routes = [
  { path: '', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'new-account',
    component: NewAccountComponent,
    canDeactivate: [ DirtyFormGuard ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
