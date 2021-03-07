var layerFarmacias;
var urlFarmacias = "datos/farmacias.geojson";

function addDatosFarmacias() {

    var rivers = new L.GeoJSON.AJAX(
        'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_rivers_europe.geojson', {
    
            style: function (feature) {
                return {
                    color: "#00ffe1",
                    weight: 6
                }
            },
        }).addTo(map);

    var carrilsBiciLineaStylePop = new L.GeoJSON.AJAX('datos/carrils-bici.geojson', {
        style: function (feature) {
            return {
                color: "#d607f2",
                weight: 5
            }
        },
        onEachFeature: function (feature, layer) {
            popupContentL = "<b>" + feature.properties.TOOLTIP + "</b>";
            layer.bindPopup(popupContentL);
        },
    }).addTo(map);

         var puntosCluster = L.markerClusterGroup();

        layerFarmacias  = new L.GeoJSON.AJAX(urlFarmacias, {
            onEachFeature: function (feature, layer) {
                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                puntosCluster.addLayer(L.marker(latlng));
                console.info(feature);
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        map.setView([41.399733,2.168598],13);
        controlCapas.addOverlay(layerFarmacias,"Farmacias");

        controlCapas.addOverlay(puntosCluster,"Cluster");

        var searchControl = new L.Control.Search({
            layer: layerFarmacias,
            initial:false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            }
        });

        searchControl.on('search:locationfound', function(e) {
            e.layer.openPopup();
        });
        map.addControl(searchControl);

}//fin funcion