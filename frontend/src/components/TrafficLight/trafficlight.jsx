import React, { useState } from "react";
import "../../Css/trafficlight.css"; // A CSS-t külön fájlba tesszük.

const TrafficLight = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeLight = () => {
    // Következő lámpa indexe
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <div className="traffic-light" onClick={changeLight}>
      <div className={`light red ${activeIndex === 0 ? "active" : ""}`}></div>
      <div
        className={`light yellow ${activeIndex === 1 ? "active" : ""}`}
      ></div>
      <div className={`light green ${activeIndex === 2 ? "active" : ""}`}></div>
    </div>
  );
};

export default TrafficLight;
