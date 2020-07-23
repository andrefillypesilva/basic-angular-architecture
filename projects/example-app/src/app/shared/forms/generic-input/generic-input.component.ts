import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

// Models
import { GenericField } from './classes/generic-field';

const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GenericInputComponent),
  multi: true
}

@Component({
  selector: 'custom-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR]
})
export class GenericInputComponent extends GenericField {

  constructor() {
    super();
  }

}
