

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}




mapboxgl.accessToken = 'pk.eyJ1IjoibW9lbW56YWsiLCJhIjoiY2p5dmUzeGw5MG9xeDNtbHJoNWNzbHBxMyJ9.-47kzgkzIGwCSP93n8y2zQ';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v10',
center: [31.1303, 29.9789],
zoom: 14.5
});

var geojson = {
type: 'FeatureCollection',
features: [{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [31.1342, 29.9791]
  },
  properties: {
    title: 'Great Pyramid of Giza',
    description: 'The oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [31.1308, 29.976]
  },
  properties: {
    title: 'Pyramid of Khafre',
    description: 'The second-tallest and second-largest of the Ancient Egyptian Pyramids of Giza and the tomb of the Fourth-Dynasty pharaoh Khafre'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [31.1283, 29.9725]
  },
  properties: {
    title: 'The Pyramid of Menkaure',
    description: 'The smallest of the three main Pyramids of Giza. It is thought to have been built to serve as the tomb of the fourth dynasty Egyptian Pharaoh Menkaure.'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [31.1376, 29.9753]
  },
  properties: {
    title: 'Sphinx',
    description: 'It is a mythical creature with the head of a human and the body of a lion.'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [31.1187, 29.9796]
  },
  properties: {
    title: 'Masr language school',
    description: 'It is a language school which was inaugurated in 1985'
  }
},
{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [31.133, 29.9844]
  },
  properties: {
    title: 'Mena House Hotel',
    description: 'It is a hotel located just outside Cairo, Egypt, owned by the Egyptian General Company For Tourism & Hotels (EGOTH)'
  }
}]
};



geojson.features.forEach(function(filtered) {

      var listings = document.getElementById('listings');
      var listings = document.getElementById('listings');
      filtered.listing = listings.appendChild(document.createElement('a'));

      filtered.listing.id = filtered.properties.title;
      filtered.listing.innerHTML =filtered.properties.title;
      filtered.listing.style.cursor = "pointer";
      filtered.listing.addEventListener('click', function(e) {

          var popUps = document.getElementsByClassName('mapboxgl-popup');
          // Check if there is already a popup on the map and if so, remove it
          if (popUps[0]) popUps[0].remove();

          var popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(filtered.geometry.coordinates)
            .setHTML('<h3>' + filtered.properties.title + '</h3><p>' + filtered.properties.description + '</p>')
            .addTo(map);

    });

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      let marker = new mapboxgl.Marker(el)
        .setLngLat(filtered.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<h3>' + filtered.properties.title + '</h3><p>' + filtered.properties.description + '</p>'))
        .addTo(map);

    filtered.marker = marker;

}
);





function myFunction(){

var input = document.getElementById('myInput');


for(var i = 0 ; i<geojson.features.length ; i++){

  if(geojson.features[i].properties.title.toLowerCase().includes(input.value.toLowerCase())){
    geojson.features[i].marker.addTo(map);



      listings.appendChild(geojson.features[i].listing);



  }else{
     let elem = document.getElementById(geojson.features[i].properties.title);
     if(elem){
        elem.remove();
     }

    geojson.features[i].marker.remove();

  }

}



}




module.exports = myFunction;
