(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('1 Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('2 Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    //Spread Method:
    //planets = [...planets, "Pluto"]
    console.log(planets);

    console.log('3 Removing "The Sun" from the beginning of the planets array.');
    planets.shift("The Sun");
    console.log(planets);

    console.log('4 Removing "Pluto" from the end of the planets array.');
    planets.pop("Pluto");
    console.log(planets);

    console.log('5 Finding and logging the index of "Earth" in the planets array.');
    // let index= planets.indexOf("Earth");
    // console.log("The index of Earth is: " + index);
    console.log("Earth's index: " + planets.indexOf("Earth"));

    console.log("6 Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("7 Sorting the planets array.");
    planets.sort();
    console.log(planets);

})();