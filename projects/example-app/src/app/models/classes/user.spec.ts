import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Alex', 'alex@mail.com', 'myPass123*')).toBeTruthy();
  });
});
