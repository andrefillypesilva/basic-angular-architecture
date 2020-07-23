import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-account',
  template: '<router-outlet></router-outlet>'
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
