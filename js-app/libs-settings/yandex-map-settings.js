// YandexMap
function initYandexMap(){     
  var myMap;
  myMap = new ymaps.Map("yandexMap", {
    center: [55.76, 37.64], // Центер карты
    zoom: 7, // Коэффициент масштаба карты
    controls: [ // Элементы управления
    'zoomControl',
    'searchControl',
    'typeSelector',
    'fullscreenControl',
    'routeButtonControl'
    ]
  });
  myMap.behaviors.disable('scrollZoom'); // Отключить изменение масштаба скроллом мыши
  // myMap.controls.add("zoomControl", { // Добавить ползунок изменения масштаба
  //   position: {top: 15, left: 15}
  // });
  // Макет балуна для метки
  var htmlBaloon  = '<div class="yandex-baloon">';
      htmlBaloon +=     '<img src="http://blog.karmanov.ws/files/APIYaMaps1/min_image.png" alt="" />';
      htmlBaloon +=     '<div class="yandex-baloon_text">';
      htmlBaloon +=         '<p>The Victoria Tower Gardens</p>';
      htmlBaloon +=         '<p>Millbank</p>';
      htmlBaloon +=         '<p>City of London </p>';
      htmlBaloon +=         '<p>SW1P 3SF</p>';
      htmlBaloon +=         '<p>United Kingdom</p>';
      htmlBaloon +=         '<p>020 7641 5264</p>';
      htmlBaloon +=     '</div>';
      htmlBaloon += '</div>';
  // Макет хинта для метки
  var htmlHint  = '<div class="yandex-hint">';
      htmlHint +=     '<div class="yandex-hint_text">';
      htmlHint +=         '<p>The Victoria Tower Gardens</p>';
      htmlHint +=         '<p>Millbank</p>';
      htmlHint +=         '<p>City of London </p>';
      htmlHint +=         '<p>SW1P 3SF</p>';
      htmlHint +=         '<p>United Kingdom</p>';
      htmlHint +=         '<p>020 7641 5264</p>';
      htmlHint +=     '</div>';
      htmlHint += '</div>';
  // Макет контента для метки
  var htmlContent  = '<div class="yandex-content">';
      htmlContent +=     '<div class="yandex-hint_text">';
      htmlContent +=         '<p>The Victoria Tower Gardens</p>';
      htmlContent +=     '</div>';
      htmlContent += '</div>';
  // Метка со своим изображением, балуном и хинтом
  var myPlacemark = new ymaps.Placemark([55.7649, 37.63836],
    {
      balloonContent: htmlBaloon,
      hintContent: htmlHint,
      iconContent: htmlContent
    },
    { iconLayout: 'default#image',
      iconImageHref: 'http://blog.karmanov.ws/files/APIYaMaps1/min_marker.png',
      iconImageSize: [40, 51],
      iconImageOffset: [-20, -47],
      balloonLayout: "default#imageWithContent",
      balloonContentSize: [289, 151],
      balloonImageHref: 'http://blog.karmanov.ws/files/APIYaMaps1/min_popup.png',
      balloonImageOffset: [-144, -147],
      balloonImageSize: [289, 151],
      balloonShadow: false,
      iconLayout: 'default#imageWithContent',
      iconContentOffset: [50, 10]
    });
  // Добавление метки
  myMap.geoObjects
    .add(myPlacemark);
  // myPlacemark.balloon.open(); // Открыть балун метки
}
initYandexMap();