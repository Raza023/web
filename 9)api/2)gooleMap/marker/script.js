// Initialize and add the map
function initMap() {
    // The location of Uluru
    const london = { lat: 51.5074, lng: 0.1278 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: london,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: london,
      map: map,
    });
  }
  
  window.initMap = initMap;