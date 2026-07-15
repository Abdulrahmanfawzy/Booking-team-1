import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { cn } from "@/lib/utils";

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
        "rounded-2xl"
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