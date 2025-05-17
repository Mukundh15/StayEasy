mapboxgl.accessToken =mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML("<p>Exact location will provided after booking</p>");

const marker = new mapboxgl.Marker({ color: "black" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup) 
    .addTo(map);