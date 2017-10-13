import { Galactic } from './../js/galactic.js';

describe('Galactic', () => {
  let test_galactic;
  beforeEach(() => {
    test_galactic = new Galactic();
  });

  it('takes the an age and returns the number of milliseconds', () => {
    expect(test_galactic.milliAge(21)).toEqual(662695447680)
  });
});
