import React from "react";
import Carousel from "nuka-carousel";
import image1 from "../../Asserts/Images/child.jpg";
import "./Crousell.css";
import Screan1 from "../Screan1/Screan1";
import Screan2 from "../Screan2/Screan2";
import Screan3 from "../Screan3/Screan3";
import Screan4 from "../Screan4/Screan4";

function Crousell() {
  return (
    <Carousel style={{ height: "90vh" }}>
      <Screan1 />
      <Screan2 />
      <Screan3 />
      <Screan4 />
    </Carousel>
  );
}

export default Crousell;
