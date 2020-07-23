import { GenericField } from './generic-field';

export class GenericFieldMock extends GenericField { }

describe('GenericField', () => {
  it('should create an instance', () => {
    expect(new GenericFieldMock()).toBeTruthy();
  });
});
