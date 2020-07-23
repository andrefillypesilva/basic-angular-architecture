import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { ExampleComponent } from './example/example.component';

const routes = [
  { path: '', component: ExampleComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
