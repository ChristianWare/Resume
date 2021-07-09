import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AssignmentIndOutlined,
  GitHub,
  Language,
  WebOutlined,
  YouTube,
} from "@material-ui/icons";

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
        "We will male you a brand that is catchy and leaves a trace.",
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
        "P.C.", "Mac", "Word", "Excel", "Power-Point", "Outlook", "Photoshop", "Illustrator",
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
      image:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
      title: "React Project 1",
      caption: "A short description",
      description: "This is my project description, please fill it in.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },

    {
      tag: "React",
      image:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
      title: "React Project 2",
      caption: "A short description",
      description: "This is my project description, please fill it in.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
      title: "Python Project 1",
      caption: "A short description",
      description: "This is my project description, please fill it in.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Java",
      image:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
      title: "Java Project 1",
      caption: "A short description",
      description: "This is my project description, please fill it in.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
};
