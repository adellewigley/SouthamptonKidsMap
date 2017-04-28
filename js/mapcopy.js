L.mapbox.accessToken = 'pk.eyJ1IjoiYWRlbGxlIiwiYSI6ImNpbm95d21pbjAwY3p3ZGx5dG8wa21nYmMifQ.dkPZzHngnI_QquyDbnZYxw';
        
var map = L.mapbox.map('map','mapbox.streets').setView([50.9208, -1.4050], 13);

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox.streets',
    zoom: 13,
    center: [50.9208, -1.4050]
});

var play = new L.LayerGroup();

        L.marker([50.925530, -1.407760])
            .bindPopup('The Common').addTo(play),
        L.marker([50.926795, -1.378793])
            .bindPopup('Riverside Park').addTo(play),
        L.marker([50.904600, -1.401730])
            .bindPopup('Houndwell Park').addTo(play),
        L.marker([50.926461, -1.429504])
            .bindPopup('St James Park').addTo(play);

var ducks = new L.LayerGroup();

        L.marker([50.927310, -1.379797])
            .bindPopup('Quack!').addTo(ducks);
        L.marker([50.923446, -1.412605])
            .bindPopup('Quack!').addTo(ducks);

var swim = new L.LayerGroup();

        L.marker([50.900519, -1.407457])
            .bindPopup('The Quays').addTo(swim);
        L.marker([50.915552, -1.356654])
            .bindPopup('Bitterne Leisure Centre').addTo(swim);

var train = new L.LayerGroup();

        L.marker([50.927676, -1.378924])
            .bindPopup('"choo choo!"').addTo(train);
        
var baseLayers = {
    "play": play,
    "ducks": ducks,
    "swim": swim,
    "train": train
};

map.addLayer(play)

var controlLayers = L.control.layers(baseLayers).addTo(map);




