var koreaCenter = {lat: 35.95, lng: 127.8};
var locDat;
var marker = new Array();

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
  for (i in _data) {
    marker[i] = new google.maps.Marker({
      position: {lat: _data[i].latitude, lng: _data[i].longitude},
      title: _data[i].name,
      map: map,
      icon: "images/famous_restaurant.png"
    });
    marker[i].addListener('click', function() {
      if (map.getZoom() < 18) {
        map.setZoom(18);
        map.setCenter(this.getPosition());
      }
      else {
        map.setZoom(7);
        map.setCenter(koreaCenter);
      }
      $(document).ready(function () {
        $('#headline').html(_data[i].name);
        $('#text').html("주소: " + _data[i].address + "<br>Tel. ");
      });
    });
  }
  
  google.maps.Marker.prototype.getCustomData = function(key) {
    if(typeof(this.custom_data) === 'undefined') {
      this.custom_data = {};
    }
    if(typeof(key) !== 'undefined') {
      return this.custom_data[key];
    }
    else {
      return this.custom_data;
    }
  }
  google.maps.Marker.prototype.setCustomData = function(key, value) {
    if(typeof(this.custom_data) === 'undefined') {
      this.custom_data = {};
    }
    if(typeof(value) !== 'undefined') {
      this.custom_data[key] = value;
    }
    else {
      this.custom_data = key;
    }
  }
}


locDat = {
  "famous_restaurant": [
      {"name": "옥합콩국수(착한 콩국수)",
        "address": "마포구 월드컵로204, 이안상암1차",
        "latitude": 37.565251,
        "longitude": 126.902225},
      {"name": "데일리 라운드",
        "address": "서울 마포구 서교동 332-33",
        "latitude": 37.555227,
        "longitude": 126.926096},
      {"name": "제일어버이순대",
        "address": " 서울 용산구 갈월동 98-52",
        "latitude": 37.541535,
        "longitude": 126.972055},
      {"name": "햇살도시락",
        "address": "서울시 영등포구 여의도동 34-2 부국증권 지하 1층",
        "latitude": 37.521879,
        "longitude": 126.928239},
      {"name": "뺑드빱빠",
        "address": "서울 강남구 신사동 572-2",
        "latitude": 37.524847,
        "longitude": 127.025392},
      {"name": "미스터곰탕",
        "address": "경기도 고양시 일산동구 중앙로 1055 레이크하임",
        "latitude": 37.643766,
        "longitude":126.786475},
      {"name": "티앤란",
        "address": "충남 천안시 서북구 불당동 1182",
        "latitude": 36.802436,
        "longitude":127.110416},
      {"name": "옛날명품호떡",
        "address": "천안시 동남구 사직동 202-16번지",
        "latitude": 36.800598, 
        "longitude":127.149298},
      {"name": "찬이락이",
        "address": "대전 서구 갈마2동 1356-1",
        "latitude": 36.340972,
        "longitude": 127.376786},
      {"name": "황해도전통손만두국",
        "address": "충남 공주시 옥룡동 183-15",
        "latitude": 36.453763,
        "longitude": 127.134965},
      {"name": "구읍할매묵집",
        "address": "충북 옥천군 옥천읍 문정리 2-2",
        "latitude": 36.314828,
        "longitude": 127.580408},
      {"name": "삼계오지한과",
        "address": "전주시 완산구 풍남동 3가 60-3",
        "latitude": 35.814947,
        "longitude": 127.153212},
      {"name": "봉평면옥",
        "address": "부산 연제구 거제3동 495-24",
        "latitude": 35.179302,
        "longitude": 129.071630},
      {"name": "이하정간장게장",
        "address": "부산시 수영구 광안동 120-269",
        "latitude": 35.160253,
        "longitude":129.114714},
      {"name": "74족발 달동점",    
        "address": "울산광역시 남구 달삼로 43",
        "latitude": 35.536211,
        "longitude":129.333796},
      {"name": "레헴",
        "address": "대구시 달성군 다사읍 매곡리 1526 번지 1층 우리밀제빵소 레헴",
        "latitude": 35.865135,
        "longitude": 128.466255},
      {"name": "언니네 키친",
        "address": "대구광역시 수성구 범어4동 204-11",
        "latitude": 35.857598,
        "longitude": 128.635714},
      {"name": "성화식당",
        "address": "대구시 동구 신암1동 605-14",
        "latitude": 35.884326,
        "longitude":  128.620124},
      {"name": "영덕회집",
        "address": "대구광역시 수성구 범어동 1446",
        "latitude": 35.865678,
        "longitude": 128.619240},
      {"name": "정무네 두부",
        "address": "강원도 춘천시 남춘로 45번길 40-14 ",
        "latitude": 37.867314,
        "longitude": 127.728349},
      {"name": "항아리닭갈비막국수",
        "address": "강원도 춘천시 신북읍 율문리 32-4",
        "latitude": 37.930151,
        "longitude": 127.763484},
      {"name": "해운대소문난암소갈비집",
        "address": "부산광역시 해운대구 중1동 중동2로10번길 32-10",
        "latitude": 35.163340,
        "longitude":129.166639}
  ],
  "travel_place": [
      {"name": "창덕궁",
        "address": "서울특별시 종로구 와룡동 율곡로 99",
        "latitude": 37.579417,
        "longitude": 126.991053},
      {"name": "설악산",
        "address": "강원 인제군 북면",
        "latitude": 38.119277,
        "longitude": 128.466019},
      {"name": "불국사",
        "address": "경상북도 경주시 진현동 15-1",
        "latitude": 35.790045,
        "longitude": 129.332264},
      {"name": "양평레일바이크",
        "address": "경기도 양평군 용문면 삼성리 126-5",
        "latitude": 37.479839,
        "longitude": 127.587228},
      {"name": "오동도",
        "address": "여수시 수정동",
        "latitude": 34.744261,
        "longitude": 127.766333},
      {"name": "소양강스카이워크",
        "address": "강원도 춘천시 근화동 영서로 2675",
        "latitude": 37.893270,
        "longitude": 127.723539},
      {"name": "벽골제",
        "address": "전라북도 김제시 부량면 신용리 119-1",
        "latitude": 35.754474,
        "longitude":126.853391},
      {"name": "덕평공룡수목원",
        "address": "경기도 이천시 마장면 작촌로 282",
        "latitude": 37.232356,
        "longitude": 127.338342},
      {"name": "가평 아침고요수목원",
        "address": "경기도 가평군 상면 수목원로 432",
        "latitude": 37.743858,
        "longitude": 127.352537},
      {"name": "덕유산",
        "address": "무주군 설천면",
        "latitude": 35.860559,
        "longitude": 127.746413},
      {"name": "전주 한옥마을",
        "address": "전라북도 전주시 완산구 풍남동3가 15-11",
        "latitude": 35.815143,
        "longitude": 127.153946},
      {"name": "송정역시장",
        "address": "광주광역시 광산구 송정동",
        "latitude": 35.136610,
        "longitude": 126.792367},
      {"name": "동백섬",
        "address": "부산광역시 우1동",
        "latitude": 35.154519,
        "longitude": 129.152689},
      {"name": "계룡산",
        "address": "계룡시 신도안면",
        "latitude": 36.342499,
        "longitude": 127.205834},
      {"name": "현풍백년도깨비시장",
        "address": "대구광역시 달성군 현풍면 하리",
        "latitude": 35.695218,
        "longitude": 128.445464},
      {"name": "고래문화마을",
        "address": "울산광역시 남구 매암동 209-1",
        "latitude": 35.505771,
        "longitude": 129.381300},
      {"name": "제주도 허브 동산",
        "address": "제주특별자치도 서귀포시 표선면 돈오름로 170",
        "latitude": 33.329784,
        "longitude":126.814990},
      {"name": "상당산성",
        "address": "충청북도 청주시 상당구 산성동 산28-2",
        "latitude": 36.661692,
        "longitude": 127.539956},
      {"name": "안동 하회마을",
        "address": "경상북도 안동시 풍천면 하회종가길 40",
        "latitude": 36.539053,
        "longitude":128.518006},
      {"name": "목포항",
        "address": "목포시 만호동",
        "latitude": 34.780960,
        "longitude":  126.383286},
      {"name": "백룡동굴",
        "address": "강원도 평창군 미탄면 미탄면 마하리",
        "latitude": 37.277801, 
        "longitude": 128.576987}
  ]
};
var _data = locDat.famous_restaurant;