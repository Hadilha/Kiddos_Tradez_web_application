import React from "react";
import "./Screan4.css";
import ten from "../../Asserts/Images/ten.png";
const Screan4 = () => {
  return (
    <div className="parent">
      <div className="right">
        <h2 className="title">Join now</h2>
        <br />
        <p>
          Join us and become part of our vibrant toy-sharing community today!{" "}
          <br />
          Embark on a toy-sharing adventure with just a <b>few clicks!</b>
          <br /> Our hassle-free registration process makes joining our
          community a breeze. Simply <b>create an account,</b> and you'll be
          ready to dive into a world of shared playtime. Register now and unlock
          the joy of toy exchange with fellow parents.
          <br />
          <b className="highlighted2">Let the fun begin!</b>
        </p>
      </div>
      <div className="left">
        <img
          src={ten}
          alt="My Image"
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </div>
  );
};

export default Screan4;
