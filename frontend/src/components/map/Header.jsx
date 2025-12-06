import React from "react";

export default function Header({ user, distance }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-gray-800">
          Route Overview - {user.name}
        </h1>
        <p className="text-sm text-gray-600">User ID: {user.id}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">Phone</p>
        <p className="font-semibold">{user.phone}</p>
        <p className="mt-1 text-blue-600 font-bold">Distance: {distance}</p>
      </div>
    </header>
  );
}
