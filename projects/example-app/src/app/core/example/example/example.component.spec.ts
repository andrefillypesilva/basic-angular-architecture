import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ExampleComponent } from './example.component';

// Test Mock
import { MockPipe } from './../../../models/classes/test-helper';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent, MockPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;

    component.pageDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at justo euismod, volutpat ligula quis, porttitor urna. Donec vulputate semper libero in fermentum. Fusce vehicula vestibulum suscipit. Pellentesque scelerisque enim ac laoreet maximus. Sed ultrices tincidunt lacus, ac porttitor justo mattis sit amet. Nam nisi erat, sollicitudin sit amet libero vel, pellentesque pretium turpis. Donec ullamcorper metus ipsum, vitae condimentum arcu malesuada in. Duis elementum urna non nunc dictum, ac fermentum purus mattis. Integer faucibus sapien vitae eleifend pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
