import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-root',
  template: `<custom-header></custom-header>
              <custom-content>
                <router-outlet></router-outlet>
              </custom-content>
             <custom-footer></custom-footer>`
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
