import {
  cms,
  email,
  react,
  uiux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  fiverr,
  sjinnovation,
  clicks,
  coinic,
  LifeCommits,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "main-site",
    title: "My Web",
    url: "https://www.rajondey.com/",
    external: true,
  },
];

const services = [
  {
    title: "HTML Email Developer",
    icon: email,
    link: "https://www.fiverr.com/rajjohin",
  },
  {
    title: "UI/UX Developer",
    icon: uiux,
    link: "https://www.fiverr.com/rajjohin",
  },
  {
    title: "React & NextJs Developer",
    icon: react,
    link: "https://www.fiverr.com/rajjohin",
  },
  {
    title: "CMS Web Developer",
    icon: cms,
    link: "https://www.fiverr.com/rajjohin",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Developer",
    company_name: "Fiverr & PPH",
    icon: fiverr,
    iconBg: "#61B134",
    date: "January 2015 - December 2019",
    points: [
      "Actively searching and bidding on new projects by understanding and responding to specific marketplace demands.",
      "Onboarding clients by gathering all the requirements via multiple consultation sessions, and initiating the project by giving proper estimation.",
      "Developed website and web applications with different technologies like WordPress, Shopify, Wix, and Squarespace, and mostly from scratch by HTML, CSS, and JS.",
      "Ensuring the delivery of high-quality, fully-tested projects, and occasionally managing the deployment of these websites on client servers.",
    ],
  },
  {
    title: "Module Lead (UI/UX)",
    company_name: "SJ Innovation Llc.",
    icon: sjinnovation,
    iconBg: "#5873B7",
    date: "May 2019 - Present",
    points: [
      "Leading and estimating projects using a deep understanding of ReactJs/NextJs and other related technologies to develop and maintain websites and web applications.",
      "Collaborating with cross-functional teams, including project managers, to understand and define project requirements. This occasionally involves participating in client meetings to comprehend complex needs.",
      "Working closely with the Quality Assurance (QA) team to ensure the delivery of error-free projects.",
      "Actively participating in code reviews, and providing constructive feedback to fellow developers to foster continuous improvement and knowledge sharing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Very professional. Answer exactly for what I ask for and did a job that was more than expected.. Great communication fast reply. The best is that this guy helped a lot after he finished the job and did everything he can to keep me satisfied. :)",
    name: "Idodamti",
    designation: "Client",
    company: "Israel",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "Our company continue to use this provider because this providers is the best. We never had not one single issue and everything is always smooth, done on time and professional. If you want quality service, done on time, and within budget, this is the provider to choose. Simply the best.",
    name: "Smith",
    designation: "Client",
    company: "Bahamas",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    testimonial:
      "My first project with Rajon and extremely happy about his work. Project delivered before deadline, completed as i requested. Top developer A+. Recommend to all. Look forward to further collaboration.",
    name: "Geopes",
    designation: "Client",
    company: "Ireland",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Clicks",
    description:
      "Clicks, a social media app created with React and Sanity, for my learning purpose only! I enjoyed doing this and learned a lot. Anyway, I practiced it from the JS Mastery Channel, and I highly recommend you all to check this out!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
    ],
    image: clicks,
    source_code_link: "https://github.com/RajonDey/clicks-project",
  },
  {
    name: "Life Commits",
    description:
      "LifeCommits, a vibrant community dedicated to personal growth, achievement, and inspiration. Join us on a transformative journey as you make meaningful commitments, achieve milestones, and inspire others along the way. Together, lets commit, achieve, and inspire a life of purpose and fulfillment.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: LifeCommits,
    source_code_link: "https://github.com/RajonDey/LifeCommit",
  },
  {
    name: "Coinic",
    description:
      "Web 3.0 paves the way for a future in which different people and machines can interact with data, value, and other counterparties without the involvement of third parties. It's so trendy and exciting that, I can't control myself to give it a try",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Alchemy",
        color: "pink-text-gradient",
      },
      {
        name: "Hardhat",
        color: "blue-text-gradient",
      },
    ],
    image: coinic,
    source_code_link: "https://github.com/RajonDey/coinic-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
