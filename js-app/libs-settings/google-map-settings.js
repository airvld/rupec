// GoogleMap
function initGoogleMap() {
  
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: 55.753281, lng: 37.622543}, // Центр карты
    zoom: 13, // Масштаб
  });
  // Стили карты
  var styles = [
    {
      "featureType": "water",
      "stylers": [
        {
          "color": "#a73cff"
        }
      ]
    }
  ];
  map.setOptions({styles: styles});
  // Контент метки
  var htmlContent  = '<div class="yandex-baloon">';
      htmlContent +=     '<img src="http://blog.karmanov.ws/files/APIYaMaps1/min_image.png" alt="" />';
      htmlContent +=     '<div class="yandex-baloon_text">';
      htmlContent +=         '<p>The Victoria Tower Gardens</p>';
      htmlContent +=         '<p>Millbank</p>';
      htmlContent +=         '<p>City of London </p>';
      htmlContent +=         '<p>SW1P 3SF</p>';
      htmlContent +=         '<p>United Kingdom</p>';
      htmlContent +=         '<p>020 7641 5264</p>';
      htmlContent +=     '</div>';
      htmlContent += '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: htmlContent
  });
  // Добавить метку
  var marker = new google.maps.Marker({
    position: {lat: 55.753281, lng: 37.622543},
    map: map,
    // animation: google.maps.Animation.DROP // Анимация маркера "BOUNCE-подпрыгивает" "DROP-падает сверху после загрузки карты"
    icon: 'http://blog.karmanov.ws/files/APIYaMaps1/min_marker.png', // Изображение маркера
  });
  // Контент метки всегда открыт
  // infowindow.open(map, marker);
  // Контент метки открывается при клике
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
initGoogleMap();