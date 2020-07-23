import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login.component';

// Services
import { AuthService } from './../../../shared/services/auth.service';

// Test Mock
import { GenericFormMock } from '../../../models/classes/test-helper';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]), FormsModule, ReactiveFormsModule ],
      declarations: [ LoginComponent ],
      providers: [ { provider: AuthService, useValue: { } } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    component.genericForm = new GenericFormMock();
    component.genericFormBuilderGroup = new FormGroup({});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
