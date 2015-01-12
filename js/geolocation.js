
var map;
var geocoder;

function init(){
  geocoder = new google.maps.Geocoder();
}

function initMap() {
	var myOptions = {
	center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 15,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  map = new google.maps.Map(document.getElementById("geolocation"), myOptions);
}
google.maps.event.addDomListener(window, 'load', initMap);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
  window.map.setCenter(latlng);
  var marker = new google.maps.Marker({
    position: latlng, 
    map: map, 
    title:"You!"
  });
  
  var dummy1 = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude + 0.001, position.coords.longitude + 0.001), 
    map: map, 
    title:"Carrefour Market"
  });
  
  var dummy2 = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude + 0.002, position.coords.longitude - 0.001), 
    map: map, 
    title:"Casino"
  });
  
  var dummy3 = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude - 0.002, position.coords.longitude - 0.001), 
    map: map, 
    title:"Casino"
  });
  
  var dummy4 = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude - 0.002, position.coords.longitude + 0.002), 
    map: map, 
    title:"Casino"
  });
}

function error(msg) {
  var s = document.querySelector('#status');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
  
  // console.log(arguments);
}