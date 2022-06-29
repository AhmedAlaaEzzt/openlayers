function init() {
  new ol.Map({
    view: new ol.View({
      center: [2968468.8073227336, 3668382.141344522],
      zoom: 5,
    }),
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM(), extent: [1923880, 3227868, 3164739, 4828471] }),
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
