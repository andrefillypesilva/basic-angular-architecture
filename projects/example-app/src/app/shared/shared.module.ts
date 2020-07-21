import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { GenericInputComponent } from './forms/generic-input/generic-input.component';
import { DebugComponent } from './forms/debug/debug.component';
import { ValidatorMessageComponent } from './forms/validator-message/validator-message.component';
import { HeaderComponent } from './structure/layout/header/header.component';
import { FooterComponent } from './structure/layout/footer/footer.component';

@NgModule({
  declarations: [ShortDescriptionPipe, GenericInputComponent, DebugComponent, ValidatorMessageComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }