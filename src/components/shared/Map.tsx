import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import type { Doctor } from "@/features/Home Page/types/doctorTypes";
import type { Marker as LeafletMarker } from "leaflet";

interface MapProps {
  position: [number, number];
  markerText: string;
  doctors?: Doctor[];
  selectedDoctor?: Doctor | null;
  doctorFromSearchLocation?: { latitude: number; longitude: number } | null;
}

function MapController({
  marker,
  defaultPosition,
}: {
  marker?: { latitude: number; longitude: number } | null;
  defaultPosition: [number, number];
}) {
  const map = useMap();

  useEffect(() => {
    if (marker) {
      map.flyTo([marker.latitude, marker.longitude], 16, {
        animate: true,
      });
    } else {
      map.flyTo(defaultPosition, 13, { animate: true });
    }
  }, [map, marker, defaultPosition]);

  return null;
}

export default function Map({
  position,
  markerText,
  doctors = [],
  selectedDoctor,
  doctorFromSearchLocation,
}: MapProps) {
  const markerRefs = useRef<Record<number, LeafletMarker | null>>({});

  const marker = doctorFromSearchLocation && typeof doctorFromSearchLocation.latitude === "number" && typeof doctorFromSearchLocation.longitude === "number"
    ? {
        latitude: doctorFromSearchLocation.latitude,
        longitude: doctorFromSearchLocation.longitude,
      }
    : null;

  useEffect(() => {
    if (selectedDoctor && markerRefs.current[selectedDoctor.id]) {
      markerRefs.current[selectedDoctor.id]?.openPopup();
    }
  }, [selectedDoctor, marker]);

  const handleDirections = (doctor: Doctor) => {
    window.open(
      `https://www.google.com/maps/dir/${position[0]},${position[1]}/${doctor.latitude},${doctor.longitude}`,
      "_blank"
    );
  };

  const renderPopupContent = (doctor: Doctor) => (
    <div className={cn("space-y-3", "min-w-[200px]")}>
      <div className={cn('flex', 'items-center', 'gap-3')}>
        {doctor.image && (
          <img
            src={doctor.image}
            alt={doctor.name}
            className={cn(
              "w-14",
              "h-14",
              "rounded-full",
              "object-cover",
              "border",
              "border-slate-100"
            )}
          />
        )}
        <div>
          <h3 className={cn('font-semibold', 'text-slate-800', 'text-sm')}>
            {doctor.name}
          </h3>
          {doctor.specialty && (
            <p className={cn("text-xs", "text-blue-600 font-medium")}>
              {typeof doctor.specialty === 'string' ? doctor.specialty : doctor.specialty.name}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        {doctor.address && (
          <p className={cn("text-xs", "text-slate-500", "leading-relaxed")}>
            📍 {doctor.address}
          </p>
        )}

        {doctor.rating !== undefined && (
          <p className={cn('text-xs', 'text-yellow-600', 'font-medium')}>
            ⭐ {doctor.rating} Rating
          </p>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDirections(doctor);
        }}
        className={cn('w-full', 'mt-2', 'py-1.5', 'bg-blue-600', 'hover:bg-blue-700', 'text-white', 'text-xs', 'font-medium', 'rounded-lg', 'transition-colors')}
      >
        Get Directions
      </button>
    </div>
  );

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom
      className={cn(
        "rounded-2xl w-[250px] md:w-[350px] lg:w-full h-64 md:h-80 lg:h-80 z-5",
      )}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MapController marker={marker} defaultPosition={position} />

      {/* User Marker */}
      <Marker position={position}>
        <Popup>{markerText}</Popup>
      </Marker>

      {/* Doctors */}
      {marker && selectedDoctor ? (
        <Marker
          key={selectedDoctor.id}
          position={[marker.latitude, marker.longitude]}
          ref={(ref) => {
            markerRefs.current[selectedDoctor.id] = ref;
          }}
          eventHandlers={{
            click: () => handleDirections(selectedDoctor),
          }}
        >
          <Popup>{renderPopupContent(selectedDoctor)}</Popup>
        </Marker>
      ) : (
        doctors
          .filter(
            (doctor): doctor is Doctor & { latitude: number; longitude: number } =>
              typeof doctor.latitude === "number" && typeof doctor.longitude === "number"
          )
          .map((doctor) => (
            <Marker
              key={doctor.id}
              position={[doctor.latitude, doctor.longitude]}
              ref={(ref) => {
                markerRefs.current[doctor.id] = ref;
              }}
              eventHandlers={{
                click: () => handleDirections(doctor),
              }}
            >
              <Popup>{renderPopupContent(doctor)}</Popup>
            </Marker>
          ))
      )}
    </MapContainer>
  );
}