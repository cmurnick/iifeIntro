console.log("Hello");

function moreCrap () {
	console.log("crap");
}


// let Something = (function(oldSomething){
// 	const animals = ["cat", "dog"];
// 	// can't access contst aimals outisde funtion

// 	oldSomethingOld.niceFunction = function () {
// 	console.log("Im' a nice function")
// 	}

// 	return oldSomething;

// })(Something || {});


var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "Earh", "Mars", "Jupiter", "saturn", "Uranus", "Neptre"];
	const spacecraft = ["rocket", "Apollo", "Mission"];

	oldSolarSystem.getPlanets = function() {
		return planets
	}

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	}

	
	
	oldSolarSystem.getSpacecraft = function() {
		return spacecraft;
	}
	oldSolarSystem.setSpacecraft = function(newSpacecraft) {
		spacecraft.push(newSpacecraft);
	}
	

	return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log("My planets", myPlanets);



