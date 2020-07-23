import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { User } from './../../../models/classes/user';

// Interfaces
import { IGenericForm } from './../../../shared/forms/generic-form/interfaces/i-generic-form';
import { IGenericFormItem } from '../../../shared/forms/generic-form/interfaces/i-generic-form-item';

@Component({
  selector: 'custom-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  genericForm: IGenericForm;
  genericFormBuilderGroup: FormGroup;

  user: User;
  isLoading: boolean;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    const items: IGenericFormItem[] = [{
      label: 'E-mail',
      id: 'username',
      type: 'text',
      placeholder: 'username@mail.com',
      validationMessage: 'Your E-mail is required.'
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      placeholder: 'myPass123*',
      validationMessage: 'Your Password is required.'
    }];

    this.genericForm = { items };

    this.genericFormBuilderGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(_form: FormGroup): void {
    this.isLoading = true;
    this.user = Object.assign({}, this.user, _form.value);
  }

}
