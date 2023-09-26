var map = L.map('map',{
    center: [-7.79558, 110.36949],
    zoom: 12
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
var marker = L.marker([-7.76393, 110.37273]).bindPopup('Teknik Geodesi <br><b>UGM</b>').addTo(map);
var marker = L.marker([-7.76527, 110.37224]).bindPopup('Smart Green Learning Center (SGLC)').addTo(map);
var circle = L.circle([-7.76595, 110.37383], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).bindPopup("Tugu Fakulas Teknik").addTo(map);