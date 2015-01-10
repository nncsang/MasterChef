
var map;
var geocoder;

function init(){
  geocoder = new google.maps.Geocoder();
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
  
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcanvas';
  mapcanvas.style.height = '400px';
  mapcanvas.style.width = '100%';

  document.querySelector('#geolocation').appendChild(mapcanvas);
  
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
  
  var marker = new google.maps.Marker({
    position: latlng, 
    map: map, 
    title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  });

  
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]) {                
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
}

function error(msg) {
  var s = document.querySelector('#status');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
  
  // console.log(arguments);
}