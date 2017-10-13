export class Galactic {
  constructor(){
    this.earth_days_in_year = 365.2422;
    this.earth_seconds_per_day = 86400;
  }

  milliAge(age){
    // Multiplies and age by days in an earth year, seonds in an earth day, and 1000 (to achieve milliseconds). It floors the result for consistent rounding
    return Math.floor(age * this.earth_days_in_year * this.earth_seconds_per_day * 1000);
  }

  secsBetween(startDate,endDate){
    startDate = new Date(startDate.year,startDate.month,startDate.day,0,0,0,0);
    endDate = new Date(endDate.year,endDate.month,endDate.day,0,0,0,0);
    return Math.abs((startDate.getTime() - endDate.getTime()) / 1000);
  }

  mercuryYears(age){
    return age * 0.24;
  }

  venusYears(age){
    return age * 0.62;
  }

  marsYears(age){
    return age * 1.88;
  }

  jupiterYears(age){
    return age * 11.86;
  }
}
