import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'custom-debug',
  templateUrl: './debug.component.html'
})
export class DebugComponent implements OnInit {

  @Input() form: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

}
