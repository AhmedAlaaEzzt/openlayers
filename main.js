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

  const bingMaps = new ol.layer.Tile({
    title: "bingMaps",
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
      bingMaps,
      cartoDB,
      stamenTonerWithLabels,
      stamenToner,
    ],
  });

  // Layer Switcher Logic for BaseLayers
  const baseLayers = document.getElementById("baseLayers");

  baseLayers.addEventListener("click", (e) => {
    if (e.target.nodeName === "INPUT") {
      const selectedLayer = e.target.value;
      baseLayerGroup
        .getLayers()
        .forEach((layer) =>
          layer.setVisible(layer.get("title") === selectedLayer)
        );
    }
  });

  map.addLayer(baseLayerGroup);

  const tileArcGISRest = new ol.layer.Tile({
    title: "TileArcGISLayer",
    visible: false,
    source: new ol.source.TileArcGISRest({
      url: "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer",
    }),
  });

  const NOAAWMSLayer = new ol.layer.Tile({
    title: "NOAAWMSLayer",
    visible: false,
    source: new ol.source.TileWMS({
      url: "https://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer?",
      params: {
        LAYERS: 1,
        FORMAT: "image/png",
      },
    }),
  });

  const tileDebugLayer = new ol.layer.Tile({
    title: "TileDebugLayer",
    visible: false,
    source: new ol.source.TileDebug(),
  });

  const rasterTileLayerGroup = new ol.layer.Group({
    layers: [tileArcGISRest, NOAAWMSLayer, tileDebugLayer],
  });

  map.addLayer(rasterTileLayerGroup);

  // Layer Switcher Logic for tileLayers
  const tileLayers = document.getElementById("tileLayers");

  tileLayers.addEventListener("click", (e) => {
    if (e.target.nodeName === "INPUT") {
      const selectedLayer = e.target;

      rasterTileLayerGroup
        .getLayers()
        .forEach((layer) =>{
          if(layer.get("title") === selectedLayer.value){
            layer.setVisible(selectedLayer.checked)
          }
    
        });
    }
  });
}

init();
