
// 1.Update 5 day forecast + Icons (finished)
// 2.Pin location search (finished but marker sucks<-- solved with newer mapbox api)
// 3.Search input (done)
//*Bonus place marker on searched city*(done)
(function() {
"use strict";
//----On start up local Weather Cards-------------------
    $.get("http://api.openweathermap.org/data/2.5/forecast",{
    APPID: OPEN_WEATHER_APPID,
    q: "San Antonio",
    units: "imperial"
}).done(function (data){
    console.log('5 day forecast', data);
        $("#city").append(`CURRENT CITY : <strong>${data.city.name.toUpperCase()}</strong>`)
        // loop through every 24 hours of the list
    for (let i=0;i < data.list.length ;i=i+8){
        // console.log(data.list[i].weather[0].description)
        $("#insert-card").append(`
        <div class="card col-2 shadow-lg">
            <div class="cardHeader pt-4"><p>${data.list[i].dt_txt.slice(0,10)}</p></div>
            <hr>
            <div class="temperature"><p>Temperature<br> Min : <strong>${Math.round(data.list[i].main.temp_min)} °F</strong> / Max : <strong>${Math.round(data.list[i].main.temp_max)} °F</strong></p>
            <strong>${data.list[i].weather[0].main.toUpperCase()}</strong><br>
            ${data.list[i].weather[0].description.toUpperCase()}<br>
            <img class="image" src = "http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt='Weather icon'></div>
            <hr>
            <div class="humidity "><p>Humidity: <strong>${data.list[i].main.humidity} %</strong></p></div>
            <hr>
            <div class="wind"><p>Wind: <strong>${Math.round(data.list[i].wind.speed)} MPH</strong></p></div>
            <hr>
            <div class="pressure"><p>Pressure: <strong>${data.list[i].main.pressure}</strong></p></div>
        </div>`);
    }
//--------------To Update Cards-------------------------------------
    function updateCards(lat,lng) {
        $.get("http://api.openweathermap.org/data/2.5/forecast",{
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (data) {
            $("#city").text("");//<-reset previous city
            $("#insert-card").text("");//<--reset weather cards
            $("#city").append(`CURRENT CITY : <strong>${data.city.name.toUpperCase()}</strong>`)
            for (let i = 0; i < data.list.length; i = i + 8) {
                $("#insert-card").append(`
      <div class="card col-2 shadow-lg">
            <div class="cardHeader pt-4"><p>${data.list[i].dt_txt.slice(0,10)}</p></div>
            <hr>
           <div class="temperature"><p>Temperature<br> Min : <strong>${Math.round(data.list[i].main.temp_min)} °F</strong> / Max : <strong>${Math.round(data.list[i].main.temp_max)} °F</strong></p>
           <strong>${data.list[i].weather[0].main.toUpperCase()}</strong><br>
            ${data.list[i].weather[0].description.toUpperCase()}<br>
            <img class="image" src = "http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt='Weather icon'></div>
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
//--------------- Marker---------------------------------------
        const marker = new mapboxgl.Marker({
            draggable: true
            })
            .setLngLat([-98.48527,29.423017])//marker start
            .addTo(map);
//----------------Update Weather Cards on Marker-----------------------------
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        // map.flyTo({center:lngLat})
        updateCards(lngLat.lat,lngLat.lng)//<--update map based on marker's coordinates
        }
        marker.on('dragend', onDragEnd);
//--------------------------------Search Function-------------------------------------------
//1.collect user input for mapbox api.(done)
//2.find lat and long for input city.(done)(mapbox does it automatically?)
//3.Send coordinates to update function.(done)
$("#search-btn").click(function(e){
    e.preventDefault();
    geocode($("#input").val(),mapboxgl.accessToken).then(function(result){
        // console.log(result);
        const lat= result[1]
        const lng= result[0]
        updateCards(lat,lng)
        map.flyTo({center: result})
        //---Add marker to selected location----
        new mapboxgl.Marker().setLngLat(result).addTo(map);
    })});
//-------------------------Hide Music Toggle-------------------
        $("#hide-music").click(function() {
            $("#icon-play").toggleClass("hidden");
        });
//-------------------------------hide music on page load-------------------------------------------------
$(document).ready(function (){
    $("#icon-play").css("display","none")
})
//--------------------------Hide Map/ Display Music Player---------------------------------------
        $("#city").click(function(){
            $("#map").toggleClass("hidden");
            })
        $("#city").dblclick(function(){$("#icon-play").css("display","").click(function() {
            if (music.paused){
                music.play().loop;
                icon.src ="/files/pause.png"
            }else {
                music.pause();
                icon.src = "/files/play.png"
            }
        })});
});
})();