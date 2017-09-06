var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "Earh", "Mars", "Jupiter", "saturn", "Uranus", "Neptre"];
	

	oldSolarSystem.getPlanets = function() {
		return planets;
	}

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	}


	return oldSolarSystem;
})(SolarSystem || {});