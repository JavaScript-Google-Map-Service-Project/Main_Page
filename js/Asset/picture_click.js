var koreaCenter = {lat: 35.95, lng: 127.8};
//사진클릭 이벤트 이벤트변수명 필드
var seoulPicture;
var incheonPicture;
var busanPicture;
var daeguPicture;
var jejuPicture;
var daejeonPicture;
var ulsanPicture;
var gwangjuPicture;
var ulleungPicture;

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
  var busan = clickZoom(busanPicture, map, 'images/example.jpg',
                            35.115, 129.045, 640);
  var daegu = clickZoom(daeguPicture, map, 'images/example.jpg',
                            35.783, 128.563, 640);
  var seoul = clickZoom(seoulPicture, map, 'images/example.jpg',
                            37.505, 126.993, 640);
  var incheon = clickZoom(incheonPicture, map, 'images/example.jpg',
                            37.41, 126.705, 640);
  var jeju = clickZoom(jejuPicture, map, 'images/example.jpg',
                            33.453, 126.533, 640);
  var daejeon = clickZoom(daejeonPicture, map, 'images/example.jpg',
                            36.295, 127.395, 640);
  var ulsan = clickZoom(ulsanPicture, map, 'images/example.jpg',
                            35.5, 129.256, 640);
  var gwangju = clickZoom(gwangjuPicture, map, 'images/example.jpg',
                            35.11, 126.837, 640);
  var ulleung = clickZoom(ulleungPicture, map, 'images/example.jpg',
                            37.46, 130.86, 640);
}
//사진클릭시 확대되는 이벤트 함수
function clickZoom(picture, mainMap, pictureLocation, latitude, longitude, width) {
  /*clickZoom(이벤트변수(17번 줄에서 이벤트변수 선언 필요),
              무조건 map기입,
              사진 저장위치,
              목표장소 위도,
              목표장소 경도,
              사진 세로길이(pixel) : width / 16000,
              사진 가로길이(pixel) : width / 9000
                사진크기는 16:9 비율임.)
  */
  var picture;

  var mainMap;
  var pictureLocation;
  var latitude;
  var longitude;
  var width;

  var imageSize = {
    north: latitude + (width / 16000),
    south: latitude - (width / 16000),
    east: longitude + (width / 9000),
    west: longitude - (width / 9000)
  }
  picture = new google.maps.GroundOverlay(pictureLocation, imageSize);
  picture.setMap(mainMap);
  picture.addListener('click', function() {
    if (mainMap.getZoom() < 12) {
      mainMap.setZoom(12);
      mainMap.setCenter({lat: latitude, lng: longitude});
    }
    else if (mainMap.getZoom() >= 12) {
      mainMap.setZoom(7);
      mainMap.setCenter(koreaCenter);
    }
  });
}