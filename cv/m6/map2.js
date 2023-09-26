var map = L.map('map',{
    center: [-7.79558, 110.36949],
    zoom: 15
    });
    
var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

var carto = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
subdomains: 'abcd',
maxZoom: 19
});

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


var baseMaps = {
    "Citra Satelit": esri,
    "Peta Carto": carto,
    "Peta OSM": OpenStreetMap_Mapnik,
    "Peta Topo": OpenTopoMap
};


var gunkid = L.marker([-7.99304, 110.55793]).bindPopup('Gunung Kidul'),
    sleman = L.marker([-7.68980, 110.34037]).bindPopup('Sleman'),
    bantul = L.marker([-7.89450, 110.32896]).bindPopup('Bantul'),
    kulonprogo = L.marker([-7.84304, 110.10363]).bindPopup('Kulon Progo'),
    ugm = L.marker([-7.77031, 110.37783]).bindPopup('Universitas Gadjah Mada'),
    uny = L.marker([-7.77564, 110.38754]).bindPopup('Universitas Negeri Yogyakarta'),
    uii = L.marker([-7.68807, 110.41377]).bindPopup('Universitas Islam Indonesia'),
    uinsuka = L.marker([-7.78472, 110.39462]).bindPopup('Universitas Islam Negeri Sunan Kalijaga'),
    umy = L.marker([-7.81012, 110.32141]).bindPopup('Universitas Muhammadiyah Yogyakarta'),
    upnvy = L.marker([-7.76272, 110.40910]).bindPopup('Universitas Pembangunan Negeri veteran Yogyakarta');

var jogja = L.layerGroup([gunkid, sleman, bantul, kulonprogo]);
var kampus = L.layerGroup([ugm, uny, uii, uinsuka, umy, upnvy]);

var overlayMaps = {
    "Jogja": jogja,
    "Kampus": kampus
};


L.control.layers(baseMaps, overlayMaps).addTo(map);

L.Control.geocoder().addTo(map);

L.easyPrint({
    title: 'My awesome print button',
    position: 'topright',
    sizeModes: ['A4Portrait', 'A4Landscape']
}).addTo(map);


var graphicScale = L.control.graphicScale({
    fill: "fill",
    doubleLine: "true",
    showSubunits: "true"
}).addTo(map);

function cari(){
    alert('tombol ditekan!');
    map.locate({setView: true, maxZoom: 16});
    
    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);
    
}

