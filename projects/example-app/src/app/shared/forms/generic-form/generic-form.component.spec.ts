import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

// Component
import { GenericFormComponent } from './generic-form.component';

// Test Mock
import { GenericFormMock } from '../../../models/classes/test-helper';

describe('GenericFormComponent', () => {
  let component: GenericFormComponent;
  let fixture: ComponentFixture<GenericFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormComponent);
    component = fixture.componentInstance;

    component.genericForm = new GenericFormMock();
    component.genericFormBuilderGroup = new FormGroup({});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
