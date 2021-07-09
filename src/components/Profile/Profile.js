import React from "react";
import { Typography } from "@material-ui/core";
import myImage from "../../assets/images/chris.jpg";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import resumeData from "../../utils/resumeData";
import "./Profile.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import { motion } from "framer-motion";
import Resume from "../../assets/Resume/ChrisWare_2021_Resume.pdf";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}</span>{" "}
          <a href={link} target='_blank' rel='noreferrer'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <motion.div
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
    >
      <div className='profile container_shadow'>
        <div className='profile_name'>
          <Typography className='name'>{resumeData.name}</Typography>
          <Typography className='title'>{resumeData.title}</Typography>
        </div>

        <figure className='profile_image'>
          <img src={myImage} alt='' />
        </figure>

        <div className='profile_information'>
          <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
            <CustomTimelineItem title='Name: ' text={resumeData.name} />
            <CustomTimelineItem title='Title: ' text={resumeData.title} />
            <CustomTimelineItem title='Email: ' text={resumeData.email} />
            <CustomTimelineItem title='Mobile: ' text={resumeData.mobile} />
            <CustomTimelineItem
              title='Residence: '
              text={resumeData.residence}
            />

            {/* {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))} */}
          </CustomTimeline>
          <div className='button_container'>
            <CustomButton
              text={"Download Cv"}
              icon={<GetAppIcon />}
              href={Resume}
              download="Christian Ware's Resume"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
