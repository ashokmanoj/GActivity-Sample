import React from "react";
// import Header from "../components/map/Header";
import Map from "../components/map/Map";

export default function UserRouteMapPage() {
  const { user, route } = userRouteData;

  return (
    <div className="h-screen flex flex-col pl-32 pr-32 border-solid">
  <Map/>
    </div>
  );
}
