function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 5,
    }),
    layers: [],
    target: "js-map",
  });

  //Base Layers
  const openStreetMapStandard = new ol.layer.Tile({
    title: "openStreetMapStandard",
    source: new ol.source.OSM(),
  });

  const openStreetMapHumanitarian = new ol.layer.Tile({
    title: "openStreetMapHumanitarian",
    source: new ol.source.OSM({
      url: "https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    }),
  });

  const BingMaps = new ol.layer.Tile({
    title: "BingMaps",
    source: new ol.source.BingMaps({
      key: "ApOR8JkmvCq-vC313dZcfsqPMRkESZek1vwOt0F6NvKud_5E2raeydr3hDRscWHt",
      imagerySet: "Aerial",
    }),
  });

  const cartoDB = new ol.layer.Tile({
    title: "cartoDB",
    source: new ol.source.XYZ({
      url: "https://{1-4}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{scale}.png",
    }),
  });

  const stamenTonerWithLabels = new ol.layer.Tile({
    title: "stamenTonerWithLabels",
    source: new ol.source.Stamen({
      layer: "toner-labels",
    }),
  });

  const stamenToner = new ol.layer.Tile({
    title: "stamenToner",
    source: new ol.source.XYZ({
      url: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
    }),
  });

  const baseLayerGroup = new ol.layer.Group({
    layers: [
      openStreetMapStandard,
      openStreetMapHumanitarian,
      BingMaps,
      cartoDB,
      stamenTonerWithLabels,
      stamenToner,
    ],
  });

  map.addLayer(baseLayerGroup);

  // Layer Switcher Logic for BaseLayers
  const baseLayers = document.getElementById("baseLayers");

  baseLayers.addEventListener("click", (e) => {
    if (e.target.nodeName === "INPUT") {
      console.log(e.target.value);
    }
  });
}

init();
