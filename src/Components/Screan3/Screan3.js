import React from "react";
import image1 from "../../Asserts/Images/child.jpg";
import "./Screan3.css";
import six from "../../Asserts/Images/six.png";
import seven from "../../Asserts/Images/seven.png";
import eigth from "../../Asserts/Images/eight.png";
import nine from "../../Asserts/Images/nine.png";

const Screan2 = () => {
  return (
    <div className="div1">
      {/*    <h1 className="title">Join Our Toy Community</h1>*/}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "400px",
          width: "350px",
          position: "relative", // Add position relative
        }}
      >
        <img src={six} alt="one" style={{ height: "140px", width: "140px" }} />
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#FF395A",
            fontWeight: "blue",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Save money{" "}
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
        <img
          src={seven}
          alt="two"
          style={{ height: "140px", width: "140px" }}
        />
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#FF6C7A",
            fontWeight: "blue",
            fontWeight: "bold",
            textAlign: "center",

            //zIndex: 2,
          }}
        >
          Explore new toys{" "}
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
          src={eigth}
          alt="three"
          style={{ height: "140px", width: "140px" }}
        />{" "}
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#BA4797",
            fontWeight: "blue",
            zIndex: 1,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {" "}
          Foster sustainable practices{" "}
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
          src={nine}
          alt="four"
          style={{ height: "140px", width: "140px" }}
        />{" "}
        <p
          style={{
            alignSelf: "center",
            fontSize: "30px",
            color: "#C27CE0",
            fontWeight: "blue",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Engage with the community{" "}
        </p>
      </div>
    </div>
  );
};

export default Screan2;
