// Models
import { Example } from './example';

describe('Example', () => {
  it('should create an instance', () => {
    expect(new Example('Title', 123, false)).toBeTruthy();
  });
});