// 1.Retrieve and access data from api.
// 2.Function to loop through each 24 hours for 5 days // (Weather map has 3 hours update per list element).
// 4.Method to append the results into html.
// 5.Implement the methods into dynamic search.
// 6.Search with moving marker for previous data.


(function() {
    "use strict";
// weather map api
    $.get("http://api.openweathermap.org/data/2.5/forecast",{
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log('5 day forecast', data);
        // loop through every 8*3 hours
        $("#city").append(`CURRENT CITY : ${data.city.name.toUpperCase()}`)
        for (let i=0;i < 40 ;i=i+8){
            $("#insert-card").append(`
            <div class="card col-2">
            <div class="cardHeader row" style="background-color: lightgray"><p>${data.list[i].dt_txt}</p></div>
            <div class="temperature row"><p>Temperature: ${data.list[i].main.temp} °F</div>
            <div class="logo row"></div>
            <hr>
            <div class="humidity row"><p>Humidity: ${data.list[i].main.humidity}</div>
            <hr>
            <div class="wind row"><p>Wind: ${data.list[i].wind.speed} MPH</div>
            <hr>
            <div class="pressure row"><p>Pressure: ${data.list[i].main.pressure}</div>
            </div>`);
        }
        mapboxgl.accessToken = WEATHER_MAP_TOKEN;
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v9', //mapbox styling
            zoom: 10,// 0-24 starting zoom view
            center: [-98.4916, 29.4260] //starting location position
        });

        var marker = new mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat(result)
            .addTo(map);

        // $("#temp1").append(`<p>Temperature: ${data.list[0].main.temp}°F`)
        // $("#humid1").append(`<p>Humidity: ${data.list[0].main.humidity}`)
        // $("#wind1").append(`<p>Wind: ${data.list[0].wind.speed}`)
        // $("#pressure1").append(`<p>Pressure: ${data.list[0].main.pressure}`)
        // $("#date1").append(`<p>${data.list[0].dt_txt}</p>`)

    });













})();