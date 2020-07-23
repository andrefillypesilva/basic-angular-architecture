import { FormControl } from '@angular/forms';

export interface IGenericFormItem {
    label: string;
    id: string;
    type: string;
    placeholder?: string;
    isReadOnly?: boolean;
    field?: FormControl;
    isTouched?: boolean;
    validationMessage?: string;
    divider?: boolean;
    helpTitle?: string;
    helpText?: string;
}
