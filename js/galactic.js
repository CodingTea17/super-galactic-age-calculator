export class Galactic {
  constructor(){
    this.earth_days_in_year = 365.2422;
    this.earth_seconds_per_day = 86400;
  }

  milliAge(age){
    // Multiplies and age by days in an earth year, seonds in an earth day, and 1000 (to achieve milliseconds). It floors the result for consistent rounding
    return Math.floor(age * this.earth_days_in_year * this.earth_seconds_per_day * 1000);
  }
}