var koreaCenter = {lat: 35.95, lng: 127.8};
var contents = "temp_f";
var unit = "℉";

$(document).ready(function() {
  $("#c").click(function () {
    $('#allMap').attr('src', '../iframe/temp_c.html');
  });
  
  $("#f").click(function () {
    $('#allMap').attr('src', '../iframe/temp_f.html');
  });
  
  $("#humidity").click(function () {
    $('#allMap').attr('src', '../iframe/humidity.html');
  });
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: koreaCenter,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    },
    rotateControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    gestureHandling: "greedy"
  });
  var styleMapType = new google.maps.StyledMapType(
    [
      {"elementType": "labels", "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative", "elementType": "geometry", "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.land_parcel", "stylers": [{"visibility": "off"}]},
      {"featureType": "administrative.neighborhood", "stylers": [{"visibility": "off"}]},
      {"featureType": "poi", "stylers": [{"visibility": "off"}]},
      {"featureType": "road", "stylers": [{"visibility": "off"}]},
      {"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
      {"featureType": "transit", "stylers": [{"visibility": "off"}]}
    ]
  );
  map.mapTypes.set('styled_map', styleMapType);
  map.setMapTypeId('styled_map');
  
  function regionJSON (region) {
    return "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/" + region + ".json";
  }
  //http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Seoul.json
  weather (regionJSON ("Seoul"), contents, 37.56000137, 126.98999786);
  weather (regionJSON ("Incheon"), contents, 37.47000122, 126.62999725);
  weather (regionJSON ("Daejeon"), contents, 36.40000076, 127.50000000);
  weather (regionJSON ("Daegu"), contents, 35.90000153, 128.64999390);
  weather (regionJSON ("Busan"), contents, 35.11000061, 129.02999878);
  weather (regionJSON ("Jeju"), contents, 33.50999832, 126.51999664);
  weather (regionJSON ("Ullung"), contents, 37.48333359, 130.89999390);
  weather (regionJSON ("Gwangju"), contents, 35.115887, 126.859871);
  weather (regionJSON ("Sokcho"), contents, 38.24000168, 128.55000305);
  weather (regionJSON ("Wonju"), contents, 37.34999847, 127.94000244);
  //
  //
  //
  //
  //
  function weather (l, c, latitude, longitude) {// l: JSON location, c: contents
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText)["current_observation"];
        var txt = data[c];
        if (contents == "temp_c" || contents == "temp_f") txt = data[c] + unit;
        var dataContent = new google.maps.Marker({
          position: {lat: latitude, lng: longitude},
          map: map,
          icon: "../images/textbox.png",
          label: {
            text: txt,
            color: "#000000",
            fontSize: "16px"
          }
        })
      }
    };
    xmlhttp.open("GET", l, true);
    xmlhttp.send();
  }
}