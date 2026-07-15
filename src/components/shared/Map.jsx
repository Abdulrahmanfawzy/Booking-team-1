import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  return null;
}

export function DoctorMap({
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

function Map({ position, markerText, doctors = [] }) {
  console.log("Doctors:", doctors);

  if (!position) return <p>Loading...</p>;

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom
      className={cn(
        "w-[250px]",
        "md:w-[350px]",
        "lg:w-[500px]",
        "h-64",
        "md:h-80",
        "lg:h-[400px]",
        "rounded-2xl z-10" 
      )}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={position}>
        <Popup>{markerText}</Popup>
      </Marker>

      {doctors.map((doctor) => (
        <Marker
          key={doctor.id}
          position={[
            Number(doctor.latitude),
            Number(doctor.longitude),
          ]}
        >
          <Popup>
            <div>
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <p>{doctor.hospital}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;