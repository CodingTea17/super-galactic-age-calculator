import { Galactic } from './../js/galactic.js';

$(document).ready(() => {
  const userGalactic = new Galactic();

  for (let i = 1; i < 186; i++){
    $("#country").append(`<option value="${i}">${userGalactic.male_life_span[i][0]}</option>`);
  }

  $("#country").append()

  $("#milli-calc").click(() => {
    $("#results").hide();
    $("#results-content").remove();
    $("#milli-calc-card").show();
    $("#date-date-card").hide();
    $("#galactic-age-card").hide();
    $("#life-span-card").hide();
  });
  $("#date-date").click(() => {
    $("#results").hide();
    $("#results-content").remove();
    $("#milli-calc-card").hide();
    $("#date-date-card").show();
    $("#galactic-age-card").hide();
    $("#life-span-card").hide();
  });
  $("#galactic-age").click(() => {
    $("#results").hide();
    $("#results-content").remove();
    $("#milli-calc-card").hide();
    $("#date-date-card").hide();
    $("#galactic-age-card").show();
    $("#life-span-card").hide();
  });
  $("#life-span").click(() => {
    $("#results").hide();
    $("#results-content").remove();
    $("#milli-calc-card").hide();
    $("#date-date-card").hide();
    $("#galactic-age-card").hide();
    $("#life-span-card").show();
  });

  $("#milli-calc-form").submit((event) => {
    event.preventDefault();
    $("#results-content").remove();
    $("#results-body").append(`<h3 id="results-content">Whoa! You have been around for ${userGalactic.milliAge(parseInt($("#earth-age-years").val()))} milliseconds!</h3>`);
    $("#results").show();
  });
  $("#date-date-form").submit((event) => {
    event.preventDefault();
    $("#results-content").remove();
    let date1 = {month:parseInt($("#m1").val()), day:parseInt($("#d1").val()), year:parseInt($("#y1").val())};
    let date2 = {month:parseInt($("#m2").val()), day:parseInt($("#d2").val()), year:parseInt($("#y2").val())};
    $("#results-body").append(`<h3 id="results-content">There are ${userGalactic.secsBetween(date1, date2)} seconds between those two dates!</h3>`);
    $("#results").show();
  });
  $("#galactic-age-form").submit((event) => {
    event.preventDefault();
    $("#results-content").remove();
    let age = parseInt($("#earth-age").val());
    let planet = parseInt($("#planet").val());
    console.log(planet);
    let result;
    let planet_name;
    if(planet === 0) {
      result = userGalactic.mercuryYears(age);
      planet_name = "Mercury";
    } else if (planet === 1) {
      result = userGalactic.venusYears(age);
      planet_name = "Venus";
    } else if (planet === 2) {
      result = userGalactic.marsYears(age);
      planet_name = "Mars";
    } else {
      result = userGalactic.jupiterYears(age);
      planet_name = "Jupiter";
    }
    $("#results-body").append(`<h3 id="results-content">You are ${result} years old on ${planet_name}</h3>`);
    $("#results").show();
  });
  $("#life-span-form").submit((event) => {
    event.preventDefault();
    $("#results-content").remove();
    let birth_yr = parseInt($("#birth-yr").val());
    let gender = parseInt($("#gender").val());
    let country = parseInt($("#country").val());
    let planet = parseInt($("#planet-life").val());
    let this_year = new Date().getFullYear();
    let result, life_expectancy, age;
    if(planet === 0) {
      life_expectancy = userGalactic.mercuryYears(userGalactic.life(birth_yr, gender, country))
      age = userGalactic.mercuryYears(this_year - birth_yr);
    } else if (planet === 1) {
      life_expectancy = userGalactic.venusYears(userGalactic.life(birth_yr, gender, country));
      age = userGalactic.venusYears(this_year - birth_yr);
    } else if (planet === 2) {
      life_expectancy = userGalactic.marsYears(userGalactic.life(birth_yr, gender, country));
      age = userGalactic.marsYears(this_year - birth_yr);
    } else if (planet === 3) {
      life_expectancy = userGalactic.jupiterYears(userGalactic.life(birth_yr, gender, country));
      age = userGalactic.jupiterYears(this_year - birth_yr);
    } else {
      life_expectancy = userGalactic.life(birth_yr, gender, country)
      age = (this_year - birth_yr);
    }
    $("#results-body").append(`<h3 id="results-content">${userGalactic.very_old(age,life_expectancy)}</h3>`);
    $("#results").show();
  });
});
