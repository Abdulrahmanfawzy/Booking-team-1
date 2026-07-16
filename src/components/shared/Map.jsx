import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

function Map({ position, markerText, doctors=[], className=""}) {
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

      {/* موقع المستخدم */}
      <Marker position={position}>
        <Popup>{markerText}</Popup>
      </Marker>

      {/* الدكاترة */}
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