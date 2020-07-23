import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-validator-message',
  templateUrl: './validator-message.component.html'
})
export class ValidatorMessageComponent implements OnInit {
  @Input() show = false;
  @Input() message = "Invalid form. Fill the field correctly.";
  @Input() errorType = "danger";
  @Input() dismissible = true;

  constructor() { }

  ngOnInit(): void { }

}
