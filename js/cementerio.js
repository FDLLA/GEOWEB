var layerCementerio;
var urlCementerio = "datos/cementerio.geojson";

function addDatosCementerio() {

        layerCementerio  = new L.GeoJSON.AJAX(urlCementerio, {
            onEachFeature: function (feature, layer) {
                popupContent = "<b>" + feature.properties.EQUIPAMENT + "</b>"+
                "<br>" + feature.properties.TIPUS_VIA +
                ". " + feature.properties.NOM_CARRER +
                " " + feature.properties.NUM_CARRER_1 + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
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

        map.setView([486468, 4646735],13);
        // controlCapas.addOverlay(layerFarmacias,"Farmacias");

}//fin funcion