import * as React from "react";
import Productcard from "../Productcard/Productcard";
import "./Content.css";
import { motion } from "framer-motion";
const Content = (props) => {
  // console.log(list);
  return (
    <motion.div layout className="productContainer">
      {props.list?.map((item) => {
        return (
          <Productcard conncted={props.conncted} item={item} key={item.id} />
        );
      })}
    </motion.div>
  );
};

export default Content;
