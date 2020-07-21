import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../../shared/shared.module';

// Components
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExampleModule { }
