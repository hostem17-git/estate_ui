import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
// import Pin from '../pin/Pin';

function Map({ items }) {
  return (
    <>
      <MapContainer
        className="Map"
        center={[52.4797, -1.90269]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </>
  );
}

export default Map;