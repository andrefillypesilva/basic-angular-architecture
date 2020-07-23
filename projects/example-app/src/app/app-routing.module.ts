import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PrivateComponent } from './core/private/private.component';

// Guard
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'private-route',
    component: PrivateComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'account',
    loadChildren: () => import('./core/account/account.module').then(mod => mod.AccountModule)
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./core/example/example.module').then(mod => mod.ExampleModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
