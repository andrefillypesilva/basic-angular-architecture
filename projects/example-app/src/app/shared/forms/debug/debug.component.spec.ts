import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { DebugComponent } from './debug.component';
import { NgForm } from '@angular/forms';

describe('DebugComponent', () => {
  let component: DebugComponent;
  let fixture: ComponentFixture<DebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugComponent);
    component = fixture.componentInstance;

    component.form = new NgForm([], []);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
