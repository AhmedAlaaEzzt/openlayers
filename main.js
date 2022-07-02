function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 5,
    }),
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() }), //Open Street Map
      new ol.layer.Vector({source: new ol.source.Vector({
        url: './data/vector/map.geojson',
        format: new ol.format.GeoJSON()
      })})
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
	});

	map.addOverlay(overlayLayer);

  	
	  // Vector Feature Popup Logic
	map.on("click", (e) => {
    overlayLayer.setPosition(undefined);

    overlayLayer.setPosition(e.coordinate);
  })


}

init()
