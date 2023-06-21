var map = L.map('map',{
  center:[-0.121606, 34.781211],
  zoom:10,
  fullscreenControl: {
    pseudoFullscreen: false
} ,
  fadeAnimation:true,
  zoomAnimation:true
});


var osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '@openStreetMap',
  maxZoom: 18,
});

var darkMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  maxZoom:20
}).addTo(map);

var USGS_USImagery = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});




// Add a marker to the map
// L.marker([51.5, -0.09]).addTo(map)
//  .bindPopup('A sample marker.');

//  var marker=L.marker([-0.121606, 34.781211]).addTo(map);
//  marker.bindPopup('<b>Patrick Wanjiru the Developer<b/>')

 


var baseMaps={
  'OpenStreetMap':osm,
  'DarkMap':darkMap,
  'EsriImagery':Esri_WorldImagery,
  'USGSImagery':USGS_USImagery,
  'OpenTopoMap':OpenTopoMap,
}

var overLayMaps={

}

L.control.layers(baseMaps, overLayMaps, {collapsed: true}).addTo(map);