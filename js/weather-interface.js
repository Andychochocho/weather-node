var Weather = require('./../js/weather.js').Weather;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#weatherLocation").click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showCity').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showTemp').text("The temperature in " + city + " is " + Math.round(((response.main.temp-273.15)*1.8+32)) + "fahrenheit.");
      console.log(JSON.stringify(response));
    });
  });
});
