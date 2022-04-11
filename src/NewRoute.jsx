import React from "react";
import { useLocation } from "react-router-dom";

const NewRoute = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div className="flex h-screen w-screen items-center justify-center text-7xl">
      {item}
    </div>
  );
};

export default NewRoute;
