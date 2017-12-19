var koreaCenter = {lat: 35.95, lng: 127.8};
var contents = "temp_c";
var unit = "℃";
var region = ["Seoul", "Incheon", "Daejeon", "Daegu", "Busan", "Jeju", "Ullung", "Gwangju", "Sokcho", "Wonju", "Seogwipo", "Jindo",
              "Jeonju", "Cheonan", "Yeongju", "Chuncheon", "Pyeongchang", "Pohang", "Suwon", "Gumi", "Sangju", "Mungyeong", "Hadong",
              "Geochang", "Gimhae", "Seosan", "Buyeo", "Boseong", "Goseong", "Sancheong", "Changnyeong", "Gyeongju", "Sunchang",
              "Gochang", "Wando", "Muan", "Mokpo", "Naju", "Muju"];
var weatherMarker = new Array();

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
  
  function regionJSON (apiRegion) {
    return "http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/" + apiRegion + ".json";
  }
  //http://api.wunderground.com/api/194f0b29be4f72da/conditions/q/KR/Seoul.json

  for (var i in region) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //
        var data = JSON.parse(this.responseText)["current_observation"];
        var labelTxt = data[contents];
        if (contents == "temp_c" || contents == "temp_f") labelTxt = data[contents] + unit;
        weatherMarker[i] = new google.maps.Marker({
          position: {lat: Number(data["display_location"]["latitude"]), lng: Number(data["display_location"]["longitude"])},
          map: map,
          icon: "../images/textbox.png",
          customInfo: i,
          label: {
            text: labelTxt,
            color: "#000000",
            fontSize: "16px"
          }
        });
        //
      }
    };
    xmlhttp.open("GET", regionJSON (region[i]), true);
    xmlhttp.send();
  }
}