import React from "react";
import Header from "../components/map/Header";
import MapView from "../components/map/MapView";
import RouteSidebar from "../components/map/RouteSidebar";
import userRouteData from "../data/userRouteData";

export default function UserRouteMapPage() {
  const { user, route } = userRouteData;

  return (
    <div className="h-screen flex flex-col pl-32 pr-32 border-solid">
      <Header user={user} distance={route.distance} />

      <div className="flex flex-1">
        <div className="flex-1 p-4 pl-10">
          <MapView route={route} />
        </div>

        <RouteSidebar segments={route.segments} />
      </div>
    </div>
  );
}
