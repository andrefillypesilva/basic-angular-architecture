import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

// Pipes
import { ShortDescriptionPipe } from './pipes/short-description.pipe';

// Forms
import { GenericInputComponent } from './forms/generic-input/generic-input.component';
import { DebugComponent } from './forms/debug/debug.component';
import { ValidatorMessageComponent } from './forms/validator-message/validator-message.component';
import { GenericFormComponent } from './forms/generic-form/generic-form.component';

// Structure
import { HeaderComponent } from './structure/layout/header/header.component';
import { FooterComponent } from './structure/layout/footer/footer.component';
import { ContentComponent } from './structure/layout/content/content.component';

// Services
import { AuthGuard } from './guards/auth.guard';
import { DirtyFormGuard } from './guards/dirty-form.guard';
import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    ShortDescriptionPipe,
    GenericInputComponent,
    DebugComponent,
    ValidatorMessageComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    ShortDescriptionPipe,
    GenericInputComponent,
    DebugComponent,
    ValidatorMessageComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    GenericFormComponent
  ],
  providers: [
    AuthGuard,
    DirtyFormGuard,
    AuthService,
    SharedService
  ]
})
export class SharedModule { }