import React from "react";
import image1 from "../../Asserts/Images/child.jpg";
import "./Screan2.css";
import one from "../../Asserts/Images/one.png";
import two from "../../Asserts/Images/two.png";
import three from "../../Asserts/Images/three.png";
import four from "../../Asserts/Images/four.png";
import five from "../../Asserts/Images/five.png";

const Screan2 = () => {
  return (
    <div className="div1">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "400px",
          // width: "400px",
          position: "relative", // Add position relative
        }}
      >
        <img src={one} alt="one" style={{ height: "140px", width: "140px" }} />
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#23A8E2",
            fontWeight: "blue",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Share your toy collection
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "900px",
          // marginTop: "-90px",
          // backgroundColor: "yellow",
          width: "400px",
          position: "relative",
        }}
      >
        <img src={two} alt="two" style={{ height: "140px", width: "140px" }} />
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#27D6B4",
            fontWeight: "blue",
            fontWeight: "bold",
            textAlign: "center",

            //zIndex: 2,
          }}
        >
          Connect with like-minded parents
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "column",
          marginLeft: "400px",
          width: "400px",
          // marginTop: "-50px",
        }}
      >
        <img
          src={three}
          alt="three"
          style={{ height: "140px", width: "140px" }}
        />{" "}
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#80CE4D",
            fontWeight: "blue",
            zIndex: 1,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {" "}
          Discover new toys
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "column",
          marginLeft: "900px",
          width: "400px",
        }}
      >
        <img
          src={four}
          alt="four"
          style={{ height: "140px", width: "140px" }}
        />{" "}
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#FFCB27",
            fontWeight: "blue",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Build trust and safety
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "column",
          marginLeft: "400px",
          width: "400px",
          // marginTop: "-15px",
        }}
      >
        <img
          src={five}
          alt="five"
          style={{ height: "140px", width: "140px" }}
        />
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",

            color: "#FF8B22",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Exclusive perks and promotions
        </p>
      </div>
    </div>
  );
};

export default Screan2;
