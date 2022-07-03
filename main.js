function init() {

  const fillStyle = new ol.style.Fill({
    color: [40, 119, 247, 1], //rgba
  });

  const strokeStyle = new ol.style.Stroke({
    color: [30, 30, 31, 1], //rgba
    width:15,
    lineCap: 'square',
    lineJoin: 'miter',
    lineDash: [50,20] //length of dash, space between dashes
  });

  
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 5,
    }),
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() }), //Open Street Map
      new ol.layer.Vector({
        source: new ol.source.Vector({
          url: "./data/vector/map.geojson",
          format: new ol.format.GeoJSON(),
        }),
        style: new ol.style.Style({
          fill: fillStyle,
          stroke: strokeStyle
        }),
      }),
    ],
    target: "js-map",
  });

  const overlayContainer = document.querySelector(".overlay-container");
  const fearureName = document.getElementById("fearure-name");
  const fearureAdditionalInfo = document.getElementById(
    "fearure-additional-info"
  );

  const overlayLayer = new ol.Overlay({
    element: overlayContainer,
    positioning: 'bottom-center'
  });

  map.addOverlay(overlayLayer);

  // Vector Feature Popup Logic
  map.on("click", (e) => {
    overlayLayer.setPosition(undefined);

    const features = map.getFeaturesAtPixel(e.pixel);

    if (features.length) {
      const clickedFeasture = features[0];
      fearureName.innerHTML = clickedFeasture.get("name");
      fearureAdditionalInfo.innerHTML = clickedFeasture.get("description");

      overlayLayer.setPosition(e.coordinate);
    }
  });
}

init();
