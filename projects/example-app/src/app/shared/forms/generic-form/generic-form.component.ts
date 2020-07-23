import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Interfaces
import { IGenericForm } from './interfaces/i-generic-form';

@Component({
  selector: 'custom-generic-form',
  templateUrl: './generic-form.component.html'
})
export class GenericFormComponent implements OnInit {

  @Input() genericForm: IGenericForm;
  @Input() genericFormBuilderGroup: FormGroup;
  @Input() isLoading = false;

  @Output() saveTrigger = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.saveTrigger.next(this.genericFormBuilderGroup);
  }

  getFormControl(_name: string): FormControl {
    return this.genericFormBuilderGroup.get(_name) as FormControl;
  }

}
