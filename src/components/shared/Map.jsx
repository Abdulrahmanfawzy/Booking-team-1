import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { cn } from "@/lib/utils";

function Map({ position, markerText, className=""}) {
  if (!position) return <p>Loading...</p>;

  return (
<MapContainer
  center={position}
  zoom={16}
  className={cn(
    "rounded-2xl w-[250px] md:w-[350px] lg:w-full lg:h-full h-64 md:h-80",
    className
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