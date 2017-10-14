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
  $("#life-span-form").submit((event) => {
    event.preventDefault();
    $("#results-content").remove();
    let birth_yr = parseInt($("#birth-yr").val());
    let gender = parseInt($("#gender").val());
    let country = parseInt($("#country").val());
    let this_year = new Date();
    let result;
    $("#results-body").append(`<h3 id="results-content">${userGalactic.very_old((parseInt(this_year.getFullYear()) - birth_yr),userGalactic.life(birth_yr, gender, country))}</h3>`);
    $("#results").show();
  });
});
