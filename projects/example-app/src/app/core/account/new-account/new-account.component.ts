import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Interfaces
import { IGenericForm } from '../../../shared/forms/generic-form/interfaces/i-generic-form';
import { IGenericFormItem } from '../../../shared/forms/generic-form/interfaces/i-generic-form-item';

// Models
import { User } from '../../../models/classes/user';

@Component({
  selector: 'custom-new-account',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent implements OnInit {

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
      label: 'Name',
      id: 'name',
      type: 'text',
      placeholder: 'Write your name here',
      validationMessage: 'Your name is required.'
    },
    {
      label: 'E-mail',
      id: 'username',
      type: 'text',
      placeholder: 'username@mail.com',
      validationMessage: 'Your e-mail is required.'
    },
    {
      label: '',
      id: '',
      type: '',
      divider: true,
      helpTitle: 'Sensitive information',
      helpText: 'This is a sensitive information. Be sure only you know this and be safe.'
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      placeholder: 'myPass123*',
      validationMessage: 'Your password is required.',
    }];

    this.genericForm = { items };

    this.genericFormBuilderGroup = this._formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onCreate(_form: FormGroup): void {
    this.isLoading = true;

    this.user = Object.assign({}, this.user, _form.value);
  }

}
