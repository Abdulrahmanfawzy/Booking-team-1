import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { cn } from "@/lib/utils";

function Map({ position, markerText }) {
  if (!position) return <p>Loading...</p>;

  return (
<MapContainer
  center={position}
  zoom={16}
  className={cn(
    "w-[250px]",
    "md:w-[350px]",
    "lg:w-[500px]",
    "h-64",
    "md:h-80",
    "lg:h-[400px]",
    "rounded-2xl"
  )}
>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={position}>
        <Popup>{markerText}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;