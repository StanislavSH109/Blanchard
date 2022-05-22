ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.758468, 37.601088],
            zoom: 9,
            controls: ['zoomControl', 'geolocationControl'] 
        }, {
            zoomControlSize: 'small',
            zoomControlPosition: {
               right: '5px',
               bottom: '300px'
            },
            geolocationControlPosition: {
                right: '5px',
                bottom: '265px'
            },

            searchControlProvider: 'yandex#search'
        }) 

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            
            iconLayout: 'default#image',
            iconImageHref: 'img/ellipse-map.png',
            iconImageSize: [20, 20],
            iconImageOffset: [-5, -38]
        })
    
    myMap.geoObjects.add(myPlacemark);
        
});