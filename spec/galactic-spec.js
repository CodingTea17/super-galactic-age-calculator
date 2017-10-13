import { Galactic } from './../js/galactic.js';

describe('Galactic', () => {
  let test_galactic;
  beforeEach(() => {
    test_galactic = new Galactic();
  });

  it('accepts the an age and returns the number of milliseconds', () => {
    expect(test_galactic.milliAge(21)).toEqual(662695447680)
  });

  it('accepts to dates to compare the time (in seconds) between them', () => {
    let epicodusStart = {month:7, day:31, year:2017};
    let epicodusGraduation = {month:12, day:21, year:2017};
    // July: 1 day, Aug: 31 days, Sept: 30, Oct: 31, Nov: 30, Dec: 21 === 143 days * 86400 === 12355200 + 3600 (for daylight savings in November) = 12358800
    expect(test_galactic.secsBetween(epicodusStart, epicodusGraduation)).toEqual(12358800)
  });

  it('returns the age of a human in Mercury years', () => {
    expect(test_galactic.mercuryYears(21)).toEqual(5.04);
  });

  it('returns the age of a human in Venus years', () => {
    expect(test_galactic.venusYears(21)).toEqual(13.02);
  });

  it('returns the age of a human in Mars years', () => {
    expect(test_galactic.marsYears(21)).toEqual(39.48);
  });

  it('returns the age of a human in Jupiter years', () => {
    expect(test_galactic.jupiterYears(21)).toEqual(249.06);
  });
});
