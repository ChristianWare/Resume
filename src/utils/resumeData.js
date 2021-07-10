import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AssignmentIndOutlined,
  GitHub,
  Language,
  WebOutlined,
} from "@material-ui/icons";
import disImg from "../assets/images/disClonePrev.png";
import dollaPrev from "../assets/images/dollaPrev.png";
import lavPrev from "../assets/images/lavPrev.png";
import musicPrev from "../assets/images/musicPrev.png";
import capPrev from "../assets/images/capPrev.png";
import ultraPrev from "../assets/images/ultraPrev.png";

export default {
  name: "Chris Ware",
  title: "Web Developer",
  email: "chris.ware.dev@gmail.com",
  job: "Freelancer",
  mobile: "(917) 769-1192",
  residence: "Phoenix, AZ",
  linkedIn: (
    <a href='https://www.linkedin.com/in/christian-ware-88417553/'>
      Go to My Profile
    </a>
  ),

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/christian-ware-88417553/",
      text: "LinkedIn.com/cw",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/ChristianWare",
      text: "Github.com/ChristianWare",
      icon: <GitHubIcon />,
    },
  },

  about:
    "During the recent Pandemic I took the time to sharpen my web development skills. I have completed multiple bootcamps from Udemy, and have a wide range of projects that showcase my skills. As a Self taught Web Developer, I’ve accumulated an in depth knowledge of Javascript and React. I am committed to maintaining my technical skills and keeping up to date with industry knowledge. I am highly motivated, and I am looking to transition into a role where I can contribute my knowledge and grow within a company. ",

  experiences: [
    {
      title: "ADP - 401k Specialist",
      date: "October 2018 - May 2020",
      description:
        "Served as primary administrative support for the MEP (Multiple Employer Plan) 401(k) for over 250 Clients; Researched complex participant questions and plan issues; acted as a liaison between employee and plan vendors on unique issues.",
    },
    {
      title: "CONDUENT - Retirement Specialist:",
      date: "January 2015 - May 2018",
      description:
        "Duties included assisting employees who were ready to retire and start collecting their pension benefits. Explained pension program details and helped retirees make an informed decision about which payment option to choose.",
    },
    {
      title: "MERRILL EDGE - Investment Specialist",
      date: "April 2014- August 2014",
      description:
        "Confirmed securities transactions, refunded commission fees charged incorrectly to accounts if client qualifies for “zero dollar trades”. Answered questions regarding new account inquiries, transferring securities from other brokerage firms, free riding violations, and also IRA and 529 contributions/Distributions.",
    },
    {
      title: "JP MORGAN CHASE - Relationship Banker",
      date: "January 2013- February 2014",
      description:
        "Acquired new clients and maintained/deepened existing relationships. Encouraged and promoted growth of balances by discussing the benefits of premier products. Interpreted numbers, trends and data collected from transaction history/banking relationship in order to recommend products and services specific to clients needs.",
    },
  ],

  educations: [
    {
      title: "Rio Salado",
      date: "August 2016 to August 2017",
      description: "Major: Economics",
    },
    {
      title: "New York City College of Technology",
      date: "August 2006 - May 2011",
      description: "Major: Advertising Design",
    },
    {
      title: "Fiorello H. LaGuardia High School",
      date: "September 2002 - June 2006",
      description: "Major: Advertising Design",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I will build you a custom website, from start to finish.",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssignmentIndOutlined />,
    },
    {
      title: "Illustrator",
      description:
        "I have been working in design and illustration for 6 years. ",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT END",
      description: [
        "React",
        "JavaScript",
        "Styled Components",
        "Material UI",
        "Framer Motion",
      ],
    },
    {
      title: "BACK END",
      description: ["NodeJS", "Express", "MongoDB", "Firebase"],
    },
    {
      title: "MISCELLANEOUS",
      description: [
        "P.C.",
        "Mac",
        "Word",
        "Excel",
        "Power-Point",
        "Outlook",
        "Photoshop",
        "Illustrator",
      ],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: `${disImg}`,
      title: "Disney Plus Clone",
      caption:
        "This is a clone of the Disney Plus Streaming Platform. Open for more details.",
      description:
        "This is a clone of the Disney Plus Streaming Platform that I built with React. I used Redux for the state management, Firebase for back end authentication, and Styled Components for the styling. I also used Framer Motion to add the ease in affect when the site first loads. This clone was deployed using Netlify. Click below to see the code on Github, and the live site. ",
      links: [
        {
          link: "https://github.com/ChristianWare/Disney-Clone",
          icon: <GitHub />,
        },
        {
          link: "https://mydisney-clone.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React",
      image: `${dollaPrev}`,
      title: "Dolla",
      caption: "Dolla is an online banking website. Open for more details. ",
      description:
        "Dolla is an online banking website that I built with React. I used  Styled Components for the styling, React Router DOM for routing, and React-Scroll for a smooth scrolling affect. I also used Framer Motion to add the ease in affect when the site first loads. Dolla was deployed using Netlify. Click below to see the code on Github, and the live site.",
      links: [
        { link: "https://github.com/ChristianWare/dolla", icon: <GitHub /> },
        { link: "https://my-dolla-site.netlify.app", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image: `${lavPrev}`,
      title: "Lavish",
      caption:
        "Lavish is a credit card promotional website. Open for more details.",
      description:
        "Lavish is a credit card website that I built with React. I styled each component with CSS, set up routing with React Router DOM, and I am also importing React-Icons for the various icons used throughout the site. I also used Framer Motion to add the ease in affect when the site first loads. Lavish was deployed using Netlify. Click below to see the code on Github, and the live site.",
      links: [
        { link: "https://github.com/ChristianWare/Lavish", icon: <GitHub /> },
        { link: "https://lavish-cc.netlify.app/", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image: `${musicPrev}`,
      title: "Waves Music App",
      caption:
        "Waves is a music app that plays relaxing songs from chillhop.com. Open for more details.",
      description:
        "Waves is a music app that I built with React. I styled each component with Styled Components, set up routing with React Router DOM, and I am also importing React-Icons for the various icons used throughout the site. I also used Framer Motion to add the ease in affect when the site first loads. Waves was deployed using Netlify. Click below to see the code on Github, and the live site.",
      links: [
        {
          link: "https://github.com/ChristianWare/Music-Player",
          icon: <GitHub />,
        },
        { link: "https://wave-music-app.netlify.app", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image: `${capPrev}`,
      title: "Capture",
      caption:
        "Capture is a test portfolio website for a photogrpahy agency. Open for more details.",
      description:
        "Capture is a test portfolio website for a photogrpahy agency that I built with React. I styled each component with Styled Components, set up routing with React Router DOM, and I am also importing React-Icons for the various icons used throughout the site. I also used Framer Motion to add the ease in affect when the site first loads. Waves was deployed using Netlify. Click below to see the code on Github, and the live site.",
      links: [
        {
          link: "https://github.com/ChristianWare/Portfolio2",
          icon: <GitHub />,
        },
        { link: "cap-portfolio.netlify.app", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image: `${ultraPrev}`,
      title: "Ultra",
      caption:
        "Ultra is a marketing lean generation website. Open for more details.",
      description:
        "Ultra is a marketing lean generation website. I styled each component with CSS, set up routing with React Router DOM, and I am also importing React-Icons for the various icons used throughout the site. I also used Framer Motion to add the ease in affect when the site first loads. Ultra was deployed using Netlify. Click below to see the code on Github, and the live site.",
      links: [
        {
          link: "https://github.com/ChristianWare/Ultra-App",
          icon: <GitHub />,
        },
        { link: "https://ultra-marketing.netlify.app", icon: <Language /> },
      ],
    },
  ],
};
