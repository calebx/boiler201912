import "./index.scss";

const setupMapTheme = (map) => {
    const hidepoi = [
        {
            featureType: "poi",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
        }
    ];

    map.setOptions({ styles: hidepoi });
};

const getHereIcon = () => {
    return {
        url:
            "https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-1-small.png,assets/icons/poi/tactile/pinlet-1-small.png,assets/icons/poi/quantum/pinlet/dot_pinlet-1-small.png&highlight=ff000000,3895d3,ffffff&color=ff000000?scale=2"
    };
};

window.initMap = () => {
    const here = { lat: 31.218559, lng: 121.4779 };
    const mapElement = document.getElementById("map");
    const map = new google.maps.Map(mapElement, {
        center: here,
        zoom: 16,
        disableDefaultUI: true
    });

    const hereMarker = new google.maps.Marker({
        position: here,
        map: map,
        icon: getHereIcon()
    });

    setupMapTheme(map);
};
