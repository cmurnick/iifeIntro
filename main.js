



// let Something = (function(oldSomething){
// 	const animals = ["cat", "dog"];
// 	// can't access contst aimals outisde funtion

// 	oldSomethingOld.niceFunction = function () {
// 	console.log("Im' a nice function")
// 	}

// 	return oldSomething;

// })(Something || {});



SolarSystem.setPlanet("Pluto");
let myPlanets = SolarSystem.getPlanets();
console.log("My planets", myPlanets);

let mySpacecraft = SolarSystem.getSpacecraft();
console.log("mySpacecraft", mySpacecraft);

let myStars = SolarSystem.getStars();
console.log("My stars", myStars);
