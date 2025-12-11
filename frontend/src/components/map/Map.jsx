import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { locations } from "../../data/locations";

const containerStyle = {
  width: "100%",
  height: "700px",
};

export default function RouteMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
  });

  const [routePath, setRoutePath] = useState([]);

  useEffect(() => {
    if (isLoaded) connectAllPoints();
  }, [isLoaded]);

  const connectAllPoints = async () => {
    const directionsService = new window.google.maps.DirectionsService();
    let finalRoute = [];

    for (let i = 0; i < locations.length - 1; i++) {
      const origin = locations[i];
      const destination = locations[i + 1];

      await new Promise((resolve) => {
        directionsService.route(
          {
            origin,
            destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === "OK") {
              const path = result.routes[0].overview_path.map((p) => ({
                lat: p.lat(),
                lng: p.lng(),
              }));
              finalRoute = [...finalRoute, ...path];
            } else if (status === "ZERO_RESULTS") {
              console.warn("Skipping NO ROUTE segment:", i);
            } else {
              console.warn("Error:", status);
            }
            resolve();
          }
        );
      });
    }

    setRoutePath(finalRoute);
  };

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={locations[0]}
      zoom={7}
    >
      {/* ALL ROUTE POINTS CONNECTED */}
      {routePath.length > 0 && (
        <Polyline
          path={routePath}
          options={{
            strokeColor: "blue",
            strokeWeight: 5,
          }}
        />
      )}

      {/* Markers */}
      {locations.map((loc, i) => (
        <Marker key={i} position={loc} />
      ))}
    </GoogleMap>
  );
}
