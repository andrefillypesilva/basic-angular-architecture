import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';

// Service
import { AuthService } from './auth.service';

// Test Helper
import { MockHttp } from './../../models/classes/test-helper';

describe('AuthService', () => {
  let service: AuthService;
  let fixture: ComponentFixture<AuthService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ { provide: HttpClient, useClass: MockHttp } ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
