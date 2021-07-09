import React from "react";
import { motion } from "framer-motion";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeRounded, Telegram } from "@material-ui/icons";
import { NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <motion.div
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
    >
      <Navbar expand='lg' sticky='top' className='header'>
        {/* Home Link */}
        <Nav.Link as={NavLink} to='/' className='header_navlink'>
          <Navbar.Brand className='header_home'>
            <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className='header_left'>
            {/* Resume Link */}
            <Nav.Link
              as={NavLink}
              to='/'
              className={
                pathName === "/" ? "header_link_active" : "header_link"
              }
            >
              Resume
            </Nav.Link>
            {/* Portfolio Link */}
            <Nav.Link
              as={NavLink}
              to='/portfolio'
              className={
                pathName === "/portfolio" ? "header_link_active" : "header_link"
              }
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <div className='header_right'>
            {Object.keys(resumeData.socials).map((key) => (
              <a
                href={resumeData.socials[key].link}
                target='_blank'
                rel='noreferrer'
              >
                {resumeData.socials[key].icon}
              </a>
            ))}
            <CustomButton
              text={"Email Me"}
              icon={<Telegram />}
              href='mailto: chris.ware.dev@gmail.com'
            />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default withRouter(Header);
