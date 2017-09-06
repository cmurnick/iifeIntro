var SolarSystem = (function(oldSolarSystem){
	
	const stars = ["North", "Blue Star", "Sun"];

	
	oldSolarSystem.getStars = function() {
		return stars;
	}
	oldSolarSystem.unshiftStars = function() {
		stars.unshift();
	}

	oldSolarSystem.shiftStars = function() {
		stars.shift();
	}
	

	return oldSolarSystem;
})(SolarSystem || {});