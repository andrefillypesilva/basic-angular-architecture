import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { NewAccountComponent } from './new-account.component';

// Services
import { AuthService } from './../../../shared/services/auth.service';

// Test Mock
import { GenericFormMock } from '../../../models/classes/test-helper';

describe('NewAccountComponent', () => {
  let component: NewAccountComponent;
  let fixture: ComponentFixture<NewAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]), FormsModule, ReactiveFormsModule ],
      declarations: [ NewAccountComponent ],
      providers: [ { provide: AuthService, useValue: { } } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountComponent);
    component = fixture.componentInstance;

    component.genericForm = new GenericFormMock();
    component.genericFormBuilderGroup = new FormGroup({});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
