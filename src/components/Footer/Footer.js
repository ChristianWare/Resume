import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div animate={{opacity: 1, transition: { duration: 1 }}} initial={{opacity: 0}}>
      <div className='footer'>
        <div className='footer_left'>
          <Typography className='footer_name'>
            <p>Chris Ware</p>
            <p>chris.ware.dev@gmail.com</p>
            <p>917-769-1192</p>

          </Typography>
        </div>
        <div className='footer_right'>
          <Typography className='footer_copyright'>
            Designed and Developed by{""}{" "}
            <a href='/' target='_blank'>
              Chris Ware
            </a>
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
