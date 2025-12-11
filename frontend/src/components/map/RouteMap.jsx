import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import axios from "axios";
import { locations } from "../../data/locations";

export default function RouteMap() {
  const mapContainer = useRef(null);

  const apiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjlkNWE2YzY1NGJjODQ3NmE4MjdlMzBkODJmNmJiNGEzIiwiaCI6Im11cm11cjY0In0=";

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [locations[0].lng, locations[0].lat],
      zoom: 7,
    });

    map.on("load", async () => {
      console.log("Map Loaded!");

      // ⭐ Add markers
      locations.forEach((loc) => {
        new maplibregl.Marker({ color: "#ff0000" })
          .setLngLat([loc.lng, loc.lat])
          .addTo(map);
      });

      // Prepare route coordinates
      const coords = locations.map((p) => [p.lng, p.lat]);

      try {
        const routeRes = await axios.post(
          "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
          { coordinates: coords },
          {
            headers: {
              Authorization: apiKey,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Route Loaded!", routeRes.data);

        map.addSource("route", {
          type: "geojson",
          data: routeRes.data,
        });

        map.addLayer({
          id: "route-line",
          type: "line",
          source: "route",
          paint: {
            "line-color": "#0077ff",
            "line-width": 5,
          },
        });
      } catch (err) {
        console.error("Routing Error:", err);
      }
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "100vh", background: "#000" }}
    />
  );
}
