import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map-style.scss';
import { Icon } from 'leaflet';
import LocationIcon from '../../assets/svg/icon-location.svg';

const Map = ({ location }) => {
  const [latidude, longitude] = location;

  const MapComponent = () => {
    const map = useMap();
    map.flyTo(location);

    return null;
  };

  const markerIcon = new Icon({
    iconUrl: LocationIcon,
    iconSize: [36, 46],
  });

  return (
    <MapContainer
      className="map"
      center={location}
      zoom={13}
      scrollWheelZoom={false}
    >
      <MapComponent />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={markerIcon}>
        <Popup className="map-popup">
          <p>Latitude: {latidude}</p>
          <p>Longitude: {longitude}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
