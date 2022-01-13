"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffees">';
    // html += '' + coffee.id + '';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function updateCoffees(roastType) {
    event.preventDefault(); // don't submit the form, we just want to update the data

    var newCoffeeList = [];

    coffees.forEach(function (coffee) {
        if (coffee.roast === roastType) {
            newCoffeeList.push(coffee);
        }


            // document.getElementById('roast-selection').addEventListener(event, reload);
    });

    //Display Coffee after type of roast selected .
    tbody.innerHTML = renderCoffees(newCoffeeList);


}
const log = document.getElementById('log');

document.addEventListener('keyup', logKey);

function logKey(e) {
    log.textContent += `${e.code}`;
}


//ADD EVENT LISTENER

var dropSelection = document.querySelector('#roast-selection');
dropSelection.addEventListener("change", function (event) {
    var roastType = event.target.value;
    updateCoffees(roastType);
});

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');

//SELECTION FOR SUBMIT BUTTON.
// var roastSelection = document.querySelector('#roast-selection');

//DISPLAY ALL WHEN PAGE STARTS.
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);