function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(muestraPosicion,errorHandler);
    } else {
        console.log("El navegador no soporta localización.")
    }
}
var tuPosicion = null;
function muestraPosicion(posicion) {
    tuPosicion =  {lat: posicion.coords.latitude, lng: posicion.coords.longitude};
     google.maps.event.addDomListener(window, 'load', initialize());
}

function errorHandler (error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
    
}

function initialize() {
      var myLatLng = {lat: 36.681525, lng: -6.138007};
      var mapProp = {
        center:myLatLng,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var iconoRojo = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
      var iconoVerde = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    if(tuPosicion != null) {
         
        var marker = new google.maps.Marker({
            position: tuPosicion,
            icon : iconoVerde,
            map: map,
            title: 'Aqui estas tú'
      });
      };
      var marker = new google.maps.Marker({
        position: myLatLng,
        icon : iconoRojo,
        map: map,
        title: 'Jerez de la Frontera'
      });
    
    var latlng = [
    new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
    new google.maps.LatLng(tuPosicion.lat, tuPosicion.lng),
    ]; 
    var latlngbounds = new google.maps.LatLngBounds();
    for (var i = 0; i < latlng.length; i++) {
        latlngbounds.extend(latlng[i]);
    }
    map.fitBounds(latlngbounds);
      
}
getLocation();


