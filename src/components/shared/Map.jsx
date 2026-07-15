import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";

function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
}

export default function Map({
  center,
  markerPosition,
  popupContent,
  className = "h-[400px] w-full z-10 rounded-xl",
}) {
  return (
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={false}
      className={className}
    >
      <ChangeMapView center={center} />

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={markerPosition}>
        <Popup>{popupContent}</Popup>
      </Marker>
    </MapContainer>
  );
}