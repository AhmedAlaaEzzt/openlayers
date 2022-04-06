function init() {
  new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 5,
    }),
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() }), //Open Street Map
    ],
    target: "js-map",
  });
}

init()
