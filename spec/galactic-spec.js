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
    // July: 1 day, Aug: 31 days, Sept: 30, Oct: 31, Nov: 30, Dec: 21 === 144 days * 86400 === 12441600
    except(test_galactic.secsBetween(epicodusStart, epicodusGraduation).toEqual(12441600))
  });
});
