/* Vue JS */
var app = new Vue({
  el: '#vue',
  data: {
    message: 'VueJS working.'
  }
})


/* Leaflet */
var mymap = L.map('map1').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoiY29yaW50eHQiLCJhIjoiY2o5NXlkaGhkNG1rejMzbzRrN2JwcGZ3ZiJ9.4DnwEct8ZG9s5ERf_uG1Mw'
}).addTo(mymap);

//Add states data
L.geoJson(statesData).addTo(mymap);

//Define colours according to feature values
function getColor(d) {
    return d > 9 ? '#49006a' :
           d > 6  ? '#7a0177' :
           d > 5  ? '#ae017e' :
           d > 4  ? '#dd3497' :
           d > 3   ? '#f768a1' :
           d > 2   ? '#fa9fb5' :
           d > 1   ? '#fcc5c0' :
                      '#fde0dd';
}

//Add feature styling to map
function style(feature) {
    return {
        fillColor: getColor(feature.properties.unemployment),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}
L.geoJson(statesData, {style: style}).addTo(mymap);

//Define a mouseover highlight listener
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#3388ff',
        dashArray: '',
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
//Define highlight reset
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

//Add event listeners for interactivity
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

//Zoom to state
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap);
