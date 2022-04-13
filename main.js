function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 5,
    }),
    layers: [],
    target: "js-map",
  });

  const osmLayer = new ol.layer.Tile({ source: new ol.source.OSM() });
  map.addLayer(osmLayer);
}

init();
