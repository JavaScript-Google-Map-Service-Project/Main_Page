var koreaCenter = {lat: 35.95, lng: 127.8};
var contents = "temp_c";
var Seoul = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Seoul.json";
var Incheon = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Incheon.json";
var Daejeon = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Daejeon.json";
var Daegu = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Daegu.json";
var Busan = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Busan.json";
var Jeju = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Jeju.json";
var Ullung = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Ullung.json";
var Gwangju = "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Gwangju.json";

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

  weather (Seoul, contents, 37.56000137, 126.98999786);
  weather (Incheon, contents, 37.47000122, 126.62999725);
  weather (Daejeon, contents, 36.40000076, 127.50000000);
  weather (Daegu, contents, 35.90000153, 128.64999390);
  weather (Busan, contents, 35.11000061, 129.02999878);
  weather (Jeju, contents, 33.50999832, 126.51999664);
  weather (Ullung, contents, 37.48333359, 130.89999390);
  weather (Gwangju, contents, 35.115887, 126.859871);
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
        var txt = data[c] + "℃";
        var dataContent = new google.maps.Marker({
          position: {lat: latitude, lng: longitude},
          map: map,
          icon: "images/textbox.png",
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