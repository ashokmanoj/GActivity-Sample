import React from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

export default function MapView({ route }) {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={route.start}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full w-full rounded"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Start Marker */}
        <Marker position={route.start} icon={markerIcon}>
          <Popup>Start Point</Popup>
        </Marker>

        {/* End Marker */}
        <Marker position={route.end} icon={markerIcon}>
          <Popup>End Point</Popup>
        </Marker>

        {/* Polyline Route */}
        <Polyline positions={route.polyline} color="blue" weight={4} />
      </MapContainer>
    </div>
  );
}
