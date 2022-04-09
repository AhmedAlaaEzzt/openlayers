function init() {
  new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 5,
    }),
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() }),
      new ol.layer.Tile({ source: new ol.source.OSM({
          url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        }),
        extent: [2774458,2470738,3917116,3850273]
      }),
    ],
    target: "js-map",
  });
}

init();
