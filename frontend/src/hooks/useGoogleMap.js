import { useEffect, useState } from "react";

export const useGoogleMap = (origin, destination, setSegments) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (!origin || !destination) return;
    if (!window.google) return; // ⬅ Prevent "google not defined"

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);

          const legs = result.routes[0].legs[0];
          const segments = legs.steps.map((step, i) => ({
            id: i + 1,
            instruction: step.instructions,
            distance: step.distance.text,
            duration: step.duration.text,
          }));

          setSegments(segments);
        }
      }
    );
  }, [origin, destination]);

  return directions;
};
