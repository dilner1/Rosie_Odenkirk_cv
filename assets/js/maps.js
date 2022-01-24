function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 40.785091, lng: -73.968285  },
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

const locations = [
    { lat: 40.785078, lng: -73.968245 },
    { lat: 40.785070, lng: -73.968250 },
    { lat: 40.785045, lng: -73.968230 },
    { lat: 40.785100, lng: -73.968200 },
];