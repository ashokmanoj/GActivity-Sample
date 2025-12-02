import React, { useEffect } from "react";
import { usePageTitle } from "../context/PageTitleContext";

export default function Dashboard() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Dashboard");
  }, []);

  return <div>Dashboard Content Here</div>;
}
