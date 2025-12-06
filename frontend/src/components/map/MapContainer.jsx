import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const MapContainer = ({ center, directions }) => (
  <GoogleMap
    mapContainerStyle={containerStyle}
    zoom={10}
    center={center}
    options={{
      streetViewControl: false,
      fullscreenControl: true,
    }}
  >
    {!directions && <Marker position={center} />}
    {directions && <DirectionsRenderer directions={directions} />}
  </GoogleMap>
);

export default MapContainer;
