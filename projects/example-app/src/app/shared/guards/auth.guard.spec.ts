import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Guards
import { AuthGuard } from './auth.guard';

// Services
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: { } }]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
