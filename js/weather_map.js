
// 1.Update 5 day forecast (finished)
// 2.Pin location search (finished but marker sucks)
// 3.Search input (

(function() {
"use strict";
//----On start up local Weather-------------------
    $.get("http://api.openweathermap.org/data/2.5/forecast",{
    APPID: OPEN_WEATHER_APPID,
    q: "San Antonio",
    units: "imperial"
}).done(function (data){
    console.log('5 day forecast', data);
        $("#city").append(`CURRENT CITY : ${data.city.name.toUpperCase()}`)
        // loop through every 8 hours of the list
    for (let i=0;i < data.list.length ;i=i+8){
        $("#insert-card").append(`
        <div class="card col-2" style="text-align: center">
            <div class="cardHeader "><p>${data.list[i].dt_txt.slice(0,10)}</p></div>
            <hr>
            <div class="temperature"><p>Temperature<br> Min : <strong>${Math.round(data.list[i].main.temp_min)} °F / Max : ${Math.round(data.list[i].main.temp_max)} °F</strong></p></div>
            <div class="icon"></div>
            <hr>
            <div class="humidity "><p>Humidity: <strong>${data.list[i].main.humidity} %</strong></p></div>
            <hr>
            <div class="wind"><p>Wind: <strong>${Math.round(data.list[i].wind.speed)} MPH</strong></p></div>
            <hr>
            <div class="pressure"><p>Pressure: <strong>${data.list[i].main.pressure}</strong></p></div>
        </div>`);
    }
//--------------To update Map-------------------------------------
    function updateCards(lat,lng) {
        $.get("http://api.openweathermap.org/data/2.5/forecast",{
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (data) {
            $("#city").text("");//<-reset previous title
            $("#insert-card").text("");//<--reset weather cards
            $("#city").append(`CURRENT CITY : ${data.city.name.toUpperCase()}`)
            for (let i = 0; i < data.list.length; i = i + 8) {
                $("#insert-card").append(`
      <div class="card col-2" style="text-align: center">
            <div class="cardHeader "><p>${data.list[i].dt_txt.slice(0,10)}</p></div>
            <hr>
            <div class="temperature"><p>Temperature<br> Min : <strong>${Math.round(data.list[i].main.temp_min)} °F / Max : ${Math.round(data.list[i].main.temp_max)} °F</strong></p></div>
            <div class="icon"></div>
            <hr>
            <div class="humidity "><p>Humidity: <strong>${data.list[i].main.humidity} %</strong></p></div>
            <hr>
            <div class="wind"><p>Wind: <strong>${Math.round(data.list[i].wind.speed)} MPH</strong></p></div>
            <hr>
            <div class="pressure"><p>Pressure: <strong>${data.list[i].main.pressure}</strong></p></div>
        </div>`);
            }
        })}
//------------------------Render Map-------------------------------
        mapboxgl.accessToken = WEATHER_MAP_TOKEN;
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', //mapbox styling
            zoom: 10,// 0-24 starting zoom view
            center: ([-98.48527,29.423017])//starting position
        });
//---------------Draggable Marker------------------------------------
        const marker = new mapboxgl.Marker({
            draggable: true
            })
            .setLngLat([-97.63275471857908,29.422470681780467])//marker start
            .addTo(map);

//----------------Update WeatherMap on Marker-----------------------------
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        // map.flyTo({center:lngLat})
        updateCards(lngLat.lat,lngLat.lng)//<--update map based on marker's coordinates
        }
        marker.on('dragend', onDragEnd);
//---------------------------------------------------------------------------







});

})();