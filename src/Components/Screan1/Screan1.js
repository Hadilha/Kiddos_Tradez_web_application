import React from "react";
import image1 from "../../Asserts/Images/child.jpg";
import "./Screan1.css";

const Screan1 = () => {
  return (
    <div className="parent">
      <div className="right">
        <h2 className="title">Find the Perfect Toy</h2>
        <br />
        <p>
          Unleash your child's imagination with an incredible world of toys!
          <br />
          Explore a captivating collection of innovative playthings that promote{" "}
          <b className="highlighted">learning</b> and endless
          <b className="highlighted"> fun</b> .
          <br />
          From educational toys to interactive gadgets, our curated selection
          offers a range of captivating options for every age and interest.
          <br />
          <b className="highlighted2">
            Join our vibrant toy exchange community
          </b>
          for unbeatable savings and keep your child entertained like never
          before! Let the adventure begin!
        </p>
      </div>
      <div className="left">
        <img src={image1} alt="My Image" className="image" />
      </div>
    </div>
  );
};

export default Screan1;
