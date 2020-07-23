import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-validator-message',
  templateUrl: './validator-message.component.html'
})
export class ValidatorMessageComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() message: string = "Invalid form. Fill the field correctly.";
  @Input() errorType: string = "danger";
  @Input() dismissible: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
