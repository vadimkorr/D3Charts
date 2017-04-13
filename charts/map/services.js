
function initMap() {
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(d3.select("#map").node(), {
		center: {lat: -34.397, lng: 150.644},
		scrollwheel: true,
		zoom: 8
	});
	
	//load data, when data comes back, create an overlay
	d3.json('data.json', function(error, data) {
		if (error) {
			console.log(error);
			return;
		}
		var overlay = new google.maps.OverlayView();
	})
	

}