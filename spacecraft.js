var SolarSystem = (function(oldSolarSystem){
	
	const spacecraft = ["rocket", "Apollo", "Mission"];

	
	oldSolarSystem.getSpacecraft = function() {
		return spacecraft;
	}
	oldSolarSystem.setSpacecraft = function(newSpacecraft) {
		spacecraft.push(newSpacecraft);
	}
	

	return oldSolarSystem;
})(SolarSystem || {});