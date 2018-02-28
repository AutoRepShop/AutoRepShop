(function weatherProvider(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var key = '&APPID=1187271c92b75fd5bae852dece8c63af';

    var request = url + city + key;

    $.get(request)
        .then(function(jsonResult) {
            var temp = ` ${Math.round(jsonResult.main.temp - 273.15)} °C`;

            $('#currentWeather').text(`${city}: ${temp}`);
        });
})('Sofia');

