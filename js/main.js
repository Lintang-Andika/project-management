//MAP
var map = L.map('map').setView([39.0501, -105.5821], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var geojsonLayer = new L.GeoJSON.AJAX("foo.geojson");       
// geojsonLayer.addTo(map);

// L.geoJson(counties).addTo(map);
// // Read CSV file and parse it into an object
// Papa.parse('data/hazardsData.csv', {
//   header: true,
//   download: true,
//   complete: function(results) {
//     // Access the parsed data
//     const data = results.data;
//     console.log(data);
//   }
// });

// var COUNTY = {},
//   data = results.data;

// console.log(COUNTY)

// for (var i = 0; i < data.length; i += 1) {
//   DCOMIRIS[data[i].DCOMIRIS] = data[i].AVLN_EALT;
// }

//     AVLN_EALT: "0",
//     CWAV_EALT: "50174.80969",
//     DRGT_EALT: "0",
//     HAIL_EALT: "0",
//     ISTM_EALT: "0",
//     LNDS_EALT: "0",
//     LTNG_EALT: "0",
//     RFLD_EALT: "0",
//     SWND_EALT: "0",
//     TRND_EALT: "0",
//     WFIR_EALT: "0",
//     WNTW_EALT: "0",

//Different Hazards
//Total
function getColorTot(d) {
  return d == 'Very High'   ? '#b30000' :
         d == 'Relatively High'   ? '#e34a33' :
         d == 'Relatively Moderate'  ? '#fc8d59' :
         d == 'Relatively Low'  ? '#fdcc8a' :
         d == 'Very Low'   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleTot(feature) {
  return {
      fillColor: getColorTot(feature.properties.EAL_RATNG),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var EAL = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleTot}).addTo(map);

// Avalance
function getColorA(d) {
  return d > 281724.244   ? '#b30000' :
         d > 177164.632   ? '#e34a33' :
         d > 24236.13457  ? '#fc8d59' :
         d > 1  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleA(feature) {
  return {
      fillColor: getColorA(feature.properties.AVLN_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var AVLN = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleA});

// Cold Wave
function getColorC(d) {
  return d > 171804.0543  ? '#b30000' :
         d > 49835.15272  ? '#e34a33' :
         d > 24484.51746  ? '#fc8d59' :
         d > 4014.588995  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleC(feature) {
  return {
      fillColor: getColorC(feature.properties.CWAV_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var CWAV = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleC});

// Drought
function getColorD(d) {
  return d > 309654.9214  ? '#b30000' :
         d > 106227.4219  ? '#e34a33' :
         d > 49827.2509   ? '#fc8d59' :
         d > 10845.05434  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleD(feature) {
  return {
      fillColor: getColorD(feature.properties.DRGT_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var DRGT = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleD});

// Hail
function getColorH(d) {
  return d > 655430.5694  ? '#b30000' :
         d > 172159.1396  ? '#e34a33' :
         d > 26156.96379  ? '#fc8d59' :
         d > 6769.175191  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleH(feature) {
  return {
      fillColor: getColorH(feature.properties.HAIL_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var HAIL = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleH});

// Ice Storm
function getColorI(d) {
  return d > 31428.25463  ? '#b30000' :
         d > 12818.96664  ? '#e34a33' :
         d > 5494.54743   ? '#fc8d59' :
         d > 1767.119535  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleI(feature) {
  return {
      fillColor: getColorI(feature.properties.ISTM_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var ISTM = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleI});

// Landslide
function getColorLa(d) {
  return d > 135853.1846  ? '#b30000' :
         d > 45817.66344  ? '#e34a33' :
         d > 19378.09988  ? '#fc8d59' :
         d > 2433.43149   ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleLa(feature) {
  return {
      fillColor: getColorLa(feature.properties.LNDS_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var LNDS = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleLa});

// Lightning
function getColorLi(d) {
  return d > 251859.1641  ? '#b30000' :
         d > 121824.2292  ? '#e34a33' :
         d > 43703.96055  ? '#fc8d59' :
         d > 18843.41289  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleLi(feature) {
  return {
      fillColor: getColorLi(feature.properties.LTNG_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var LTNG = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleLi});

// River Flood
function getColorR(d) {
  return d > 545112.8363  ? '#b30000' :
         d > 243210.173   ? '#e34a33' :
         d > 85186.46926  ? '#fc8d59' :
         d > 19776.38173  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleR(feature) {
  return {
      fillColor: getColorR(feature.properties.RFLD_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var RFLD = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleR});

// Strong Wind
function getColorS(d) {
  return d > 237407.3285  ? '#b30000' :
         d > 102120.6993  ? '#e34a33' :
         d > 32989.19916  ? '#fc8d59' :
         d > 4470.797026  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleS(feature) {
  return {
      fillColor: getColorS(feature.properties.SWND_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var SWND = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleS});

// Tornadoes
function getColorT(d) {
  return d > 885842.7867  ? '#b30000' :
         d > 162984.3933  ? '#e34a33' :
         d > 36514.16213  ? '#fc8d59' :
         d > 13844.67229  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleT(feature) {
  return {
      fillColor: getColorT(feature.properties.TRND_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var TRND = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleT});

// Wildfire
function getColorWF(d) {
  return d > 567041.4297  ? '#b30000' :
         d > 169849.8744  ? '#e34a33' :
         d > 26043.69929  ? '#fc8d59' :
         d > 7165.013564  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleWF(feature) {
  return {
      fillColor: getColorWF(feature.properties.WFIR_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var WFIR = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleWF});

// Drought
function getColorWW(d) {
  return d > 55198.35749  ? '#b30000' :
         d > 24959.8003   ? '#e34a33' :
         d > 6126.177787  ? '#fc8d59' :
         d > 1789.887141  ? '#fdcc8a' :
         d > 0   ? '#fef0d9' :
                    '#FFFFFF';
}

function styleWW(feature) {
  return {
      fillColor: getColorWW(feature.properties.WNTW_EALT),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var WNTW = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {style: styleWW});


//Vulnerabilities
//non-white
function getColorV1(d) {
  return d > 0.8  ? '#252525' :
         d > 0.6  ? '#636363' :
         d > 0.4  ? '#969696' :
         d > 0.2  ? '#cccccc' :
         d > 0   ? '#f7f7f7' :
                    '#FFFFFF';
}

function styleV1(feature) {
  return {
      fillColor: getColorV1(feature.properties.Non_white_Pctg),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 1
  };
}

var V1 = new L.GeoJSON.AJAX("data/Colorado_Vuln.geojson", {style: styleV1});

//over-65
function getColorV2(d) {
  return d > 0.8  ? '#252525' :
         d > 0.6  ? '#636363' :
         d > 0.4  ? '#969696' :
         d > 0.2  ? '#cccccc' :
         d > 0   ? '#f7f7f7' :
                    '#FFFFFF';
}

function styleV2(feature) {
  return {
      fillColor: getColorV2(feature.properties.Percentage_of_pop_aged_over65),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 1
  };
}

var V2 = new L.GeoJSON.AJAX("data/Colorado_Vuln.geojson", {style: styleV2});

//Income
function getColorV3(d) {
  return d > 74489    ? '#f7f7f7' :
         d > 59336.6  ? '#cccccc' :
         d > 52079.4  ? '#969696' :
         d > 46585.4  ? '#636363' :
         d > 0   ? '#252525' :
                    '#FFFFFF';
}

function styleV3(feature) {
  return {
      fillColor: getColorV3(feature.properties.Per_Capita_Personal_Income),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 1
  };
}

var V3 = new L.GeoJSON.AJAX("data/Colorado_Vuln.geojson", {style: styleV3});

var baseMaps = {
  "Total": EAL,
  "Avalanche": AVLN,
  "Cold Wave": CWAV,
  "Drought": DRGT,
  "Hail": HAIL,
  "Ice Storm": ISTM,
  "Landslide": LNDS,
  "Lightning": LTNG,
  "River Flooding": RFLD,
  "Strong Wind": SWND,
  "Tornadoes": TRND,
  "Wildfire": WFIR,
  "Winter Weather": WNTW
};

var overlayMaps = {
  "Percentage of Non-White Population": V1,
  "Percentage of Population older than 65": V2,
  "Personal Income": V3
}

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//Map Highlighting
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  layer.bringToFront();
  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}

// geojson = new L.GeoJSON.AJAX("data/NRI_Counties_Colo.geojson", {
//   // style: style,
//   onEachFeature: onEachFeature
// }).addTo(map);

//Info Control
// var info = L.control();

// info.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
//     this.update();
//     return this._div;
// };

// // method that we will use to update the control based on feature properties passed
// info.update = function (props) {
//     this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
//         '<b>' + props.COUNTY + '</b><br />' + props.CWAV_EALT + ' people / mi<sup>2</sup>'
//         : 'Hover over a state');
// };

// info.addTo(map);

//Map Legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1, 4014.588995, 24484.51747, 49835.15273, 171804.0544],
        labels = ['N/A', 'Very Low', 'Relatively Low', 'Moderate', 'Relatively High', 'Very High'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorC(grades[i]) + '"></i> ' +
            labels[i] + ('<br>');
    }

    return div;
};

legend.addTo(map);

//Map Legend2
var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0.1, 0.3, 0.5, 0.7, 0.9],
        labels = ['Very Low Vulnerability', 'Relatively Low Vulnerability', 'Moderate Vulnerability', 'Relatively High Vulnerability', 'Very High Vulnerability'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorV2(grades[i]) + '"></i> ' +
            labels[i] + ('<br>');
    }

    return div;
};

legend.addTo(map);

// L.geoJson(counties, {style: style}).addTo(map);

// var results = {
//   data: [{
//     COUNTY: "600010000",
//     AVLN_EALT: "0",
//     CWAV_EALT: "50174.80969",
//     DRGT_EALT: "0",
//     HAIL_EALT: "0",
//     ISTM_EALT: "0",
//     LNDS_EALT: "0",
//     LTNG_EALT: "0",
//     RFLD_EALT: "0",
//     SWND_EALT: "0",
//     TRND_EALT: "0",
//     WFIR_EALT: "0",
//     WNTW_EALT: "0",
//   }, {
//     DCOMIRIS: "600020000",
//     score: "0.03333333333333333"
//   }, {
//     DCOMIRIS: "605380000", // need the correct code
//     score: "0.3"
//   }]
// };

// function style(feature) {
//   return {
//       fillColor: getColor(parseFloat(COUNTY[feature.properties.AVLN_EALT])),
//       weight: 2,
//       opacity: 1,
//       color: 'white',
//       dashArray: '3',
//       fillOpacity: 0.7
//   };
// }

// L.geoJson(counties, {style: style}).addTo(map);


//GRAPH
const body = document.body;
const html = document.documentElement;const height1 = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);
const width1 = $(window).width();

// set the dimensions and margins of the graph
const margin = {top: 30, right: 75, bottom: 10, left: 75},
  width = 0.5*width1 - margin.left - margin.right,
  height = 0.8*height1 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#graph")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        `translate(${margin.left},${margin.top})`);

// Parse the Data
d3.csv("data/results1.csv").then( function(data) {

  // Color scale: give me a specie name, I return a color
//   const color = d3.scaleOrdinal()
//     .domain(["setosa", "versicolor", "virginica" ])
//     .range([ "#440154ff", "#21908dff", "#fde725ff"])

  // Here I set the list of dimension manually to control the order of axis:
  dimensions = ["Percentage Over 65", "Per Capita Personal Income", "Non-White Percentage"]

  // For each dimension, I build a linear scale. I store all in a y object
  const y = {}
  for (i in dimensions) {
    names = dimensions[i]
    y[names] = d3.scaleLinear()
      .domain( [-1,1] ) // --> Same axis range for each group
      // --> different axis range for each group --> .domain( [d3.extent(data, function(d) { return +d[name]; })] )
      .range([height, 0])
  }

  // Build the X scale -> it find the best position for each Y axis
  x = d3.scalePoint()
    .range([0, width])
    .domain(dimensions);

  // Highlight the specie that is hovered
  const highlight = function(event, d){

    selected_specie = d.Hazards

    // first every group turns grey
    d3.selectAll(".line")
      .transition().duration(200)
      .style("stroke", "lightgrey")
      .style("opacity", "0.2")
    // Second the hovered specie takes its color
    d3.selectAll("." + selected_specie)
      .transition().duration(200)
      .style("stroke", "#69b3a2")
      .style("opacity", "1")
  }

  // Unhighlight
  const doNotHighlight = function(event, d){
    d3.selectAll(".line")
      .transition().duration(200).delay(1000)
      .style("stroke", "#69b3a2" )
      .style("opacity", "1")
  }

  // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
      return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
  }

  // Draw the lines
  svg
    .selectAll("myPath")
    .data(data)
    .join("path")
      .attr("class", function (d) { return "line " + d.Hazards } ) // 2 class for each line: 'line' and the group name
      .attr("d",  path)
      .style("fill", "none" )
      .style("stroke", "#69b3a2" )
      .style("opacity", 0.5)
      .on("mouseover", highlight)
      .on("mouseleave", doNotHighlight )

  // Draw the axis:
  svg.selectAll("myAxis")
    // For each dimension of the dataset I add a 'g' element:
    .data(dimensions).enter()
    .append("g")
    .attr("class", "axis")
    // I translate this element to its right position on the x axis
    .attr("transform", function(d) { return `translate(${x(d)})`})
    // And I build the axis with the call function
    .each(function(d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])); })
    // Add axis title
    .append("text")
      .style("text-anchor", "middle")
      .style("font-size", "11px")
      .attr("y", -9)
      .text(function(d) { return d; })
      .style("fill", "black")

})
