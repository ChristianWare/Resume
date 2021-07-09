import React from "react";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";

import "./Button.css";

const CustomButton = ({ text, icon }) => {
  return (
    <motion.div
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
    >
      <Button
        className='custom_btn'
        endIcon={icon ? <div className='btn_icon_container'>{icon}</div> : null}
      >
        <span className='btn_text'>{text}</span>
      </Button>
    </motion.div>
  );
};

export default CustomButton;
