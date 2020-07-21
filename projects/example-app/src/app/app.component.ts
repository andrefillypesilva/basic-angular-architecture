import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
