import { expect } from '@esm-bundle/chai';
import { addNumbers } from '../src/data';

describe('myFunction', () => {
  it('adds two numbers together', () => {
    expect(addNumbers(1, 2)).to.equal(3);
  });
});