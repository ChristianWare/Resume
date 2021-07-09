import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AssignmentIndOutlined,
  GitHub,
  Language,
  WebAssetOutlined,
  WebOutlined,
  YouTube,
} from "@material-ui/icons";

export default {
  name: "Chris Ware",
  title: "React Developer",
  email: "c.p.ware@hotmail.com",
  job: "Freelancer",
  mobile: "(917) 769-1192",
  residence: "Phoenix, AZ",
  linkedIn: (
    <a href='linkedin.com/in/christian-ware-88417553'>Go to My Profile</a>
  ),

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com",
      text: "LinkedIn.com/cw",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.github.com",
      text: "Github.com/cw",
      icon: <GitHubIcon />,
    },
  },

  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde vel placeat debitis sequi vitae natus fuga ratione porro. Ipsam voluptas et sequi atque reiciendis voluptate odio obcaecati officiis facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde vel placeat debitis sequi vitae natus fuga ratione porro. Ipsam voluptas et sequi atque reiciendis voluptate odio obcaecati officiis facilis.",

  experiences: [
    {
      title: "Work 1",
      date: "2018- present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work 2",
      date: "2014-2018",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work 3",
      date: "2010-2014",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],

  educations: [
    {
      title: "ASU",
      date: "2018- present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "CUNY",
      date: "2014-2018",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "LaGuardia",
      date: "2010-2014",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
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
      title: "DESIGN TOOLS",
      description: ["Figma", "CodePen", "Balsamiq"],
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
        { link: "https://www.google.com", icon: <YouTube /> },
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
        { link: "https://www.google.com", icon: <YouTube /> },
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
        { link: "https://www.google.com", icon: <YouTube /> },
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
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
};
