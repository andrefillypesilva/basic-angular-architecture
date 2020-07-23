import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {

  pageDescription: string;

  constructor() {
    this.pageDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at justo euismod, volutpat ligula quis, porttitor urna. Donec vulputate semper libero in fermentum. Fusce vehicula vestibulum suscipit. Pellentesque scelerisque enim ac laoreet maximus. Sed ultrices tincidunt lacus, ac porttitor justo mattis sit amet. Nam nisi erat, sollicitudin sit amet libero vel, pellentesque pretium turpis. Donec ullamcorper metus ipsum, vitae condimentum arcu malesuada in. Duis elementum urna non nunc dictum, ac fermentum purus mattis. Integer faucibus sapien vitae eleifend pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  }

  ngOnInit(): void {
  }

}
