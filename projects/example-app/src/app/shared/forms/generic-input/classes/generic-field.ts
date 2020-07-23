import { Input, OnInit } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

// Services
import { SharedService } from '../../../services/shared.service';

export abstract class GenericField implements ControlValueAccessor, OnInit {

    @Input() label: string;
    @Input() id: string;
    @Input() type: string = 'text';
    @Input() placeholder: string;
    @Input() isReadOnly: boolean = false;
    @Input() field: FormControl;
    @Input() isTouched: boolean = false;
    @Input() validationMessage: string;

    hasError: boolean = false;

    firstInteraction: boolean = true;

    protected innerValue: any;

    get value() {
        return this.innerValue;
    }

    set value(_value: any) {
        if (_value != this.innerValue) {
            this.innerValue = _value;
            this.onChangeCb(_value);
        }
    }

    onChangeCb: (_: any) => void = () => { };
    onTouchedCb: (_: any) => void = () => { };

    constructor() { }

    ngOnInit(): void { }

    onKeyUp(): void {
        SharedService.isThereDirtyForm = true;

        if (!this.firstInteraction) {
            if (this.field.valid) {
                this.hasError = false;
            } else {
                this.hasError = true;
            }
        }
    }

    onBlur(_message: string): void {
        this.firstInteraction = false;
        this.hasError = false;

        if (this.field.errors != null) {
            this.hasError = true;
        }
    }

    writeValue(_value: any): void {
        this.value = _value;
    }
    registerOnChange(_fn: any): void {
        this.onChangeCb = _fn;
    }
    registerOnTouched(_fn: any): void {
        this.onTouchedCb = _fn;
    }
    setDisabledState?(_isDisabled: boolean): void {
        this.isReadOnly = _isDisabled;
    }
}