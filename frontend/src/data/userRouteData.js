const userRouteData = {
  user: {
    name: "John Doe",
    id: "USR-45821",
    phone: "+91 98765 43210",
  },
  route: {
    start: { lat: 12.9716, lng: 77.5946 }, // Bangalore
    end: { lat: 26.1445, lng: 91.7362 }, // Guwahati, Assam
    distance: "1346 KM",
    segments: [
      { name: "Segment 1", description: "Bangalore → Hosur" },
      { name: "Segment 2", description: "Hosur → Krishnagiri" },
      { name: "Segment 3", description: "Krishnagiri → Chennai" },
    ],
    polyline: [
      [12.9716, 77.5946],
      // [12.7409, 77.8253],
      [26.1445, 91.7362],
      // [12.18, 78.8],
      // [13.0827, 80.2707],
    ],
  },
};

export default userRouteData;
