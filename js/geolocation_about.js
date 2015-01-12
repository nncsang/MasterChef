
var map;
var geocoder;

function init(){
  geocoder = new google.maps.Geocoder();
}

function initMap(){
	var latlng = new google.maps.LatLng(43.618252, 7.076171);
	
	var myOptions = {
    zoom: 18,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 
  map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
  
  var marker = new google.maps.Marker({
    position: latlng, 
    map: map, 
    title:"Us!"
  });
}
google.maps.event.addDomListener(window, 'load', initMap);

function error(msg) {
  var s = document.querySelector('#status');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
  
  // console.log(arguments);
}