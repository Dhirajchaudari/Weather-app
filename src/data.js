//  icons
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import PromtopiaImg from './assets/img/projects/promto.png';
import CryptoverseImg from './assets/img/projects/Cryptoverse.png';
import EcommerceImg from './assets/img/projects/E-commerce.png';
import WeatherImg from './assets/img/projects/Weather.png';
import Sushiman from './assets/img/projects/sushiman.png'

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

const NextJs = 'NextJs';
const ReactJs = 'React';
const HTMLJavascript = "Html/Javascript";
const all = 'all'

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/dhiraj2748',
  },
  {
    icon: <FiGithub />,
    href: 'https://www.github.com/Dhirajchaudari',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/dhiraj-chaudhari-aa207620b/',
  }
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: PromtopiaImg,
    name: 'Promptopia',
    about:"🚀 Ignite creativity and teamwork: Share AI Prompts with devs worldwide and watch innovation soar! 🌍👩‍💻👨‍💻✨",
    category: NextJs,
    portfolioLink:'https://promptopia-by-dhiraj.netlify.app/',
    gitHubLink:'https://github.com/Dhirajchaudari/Promptopia_'
  },
  {
    id: '2',
    image: CryptoverseImg,
    name: 'Cryptoverse',
    about: "📈 Dive into the world of cryptocurrencies with our cutting-edge website! 🚀 Stay updated on real-time crypto data and breaking news. 💰📰 ",
    category: ReactJs,  
    portfolioLink: 'https://tourmaline-stroopwafel-4a7bcc.netlify.app/',
    gitHubLink:'https://github.com/Dhirajchaudari/Cryptoverse'
  },
  {
    id: '3',
    image: WeatherImg,
    name: "Weather",
    about: "🌦️ Stay ahead of the weather curve with my sleek weather app – your daily forecast companion. ☔⛅",
    category: ReactJs,
    portfolioLink: 'https://dynamic-phoenix-41983f.netlify.app/',
    gitHubLink:'https://github.com/Dhirajchaudari/Weather-app'
  },
  {
    id: '4',
    image: EcommerceImg,
    name: 'E-commerce-app',
    about: "🛍️ Shop smart, shop easy! Discover a world of endless possibilities through our user-friendly e-commerce app. 📦💃",
    category: ReactJs,
    portfolioLink:'https://wild-gold-seagull-sari.cyclic.app/',
    gitHubLink:'https://github.com/Dhirajchaudari/e-commerce-app-2023'
  },
  {
    id: '5',
    image: Sushiman,
    name: 'Sushiman',
    about: "Elevating sushi through design: 🍣✨ Indulge in the art of CSS mastery showcased on our SushiMan website.",
    category: HTMLJavascript,
    portfolioLink:'https://dhirajchaudari.github.io/_Sushiman',
    gitHubLink:'https://github.com/Dhirajchaudari/_Sushiman'
  }
];

// projects
export const projectsNav = [
  {
    name: all,
  },
  {
    name: NextJs,
  },
  {
    name: ReactJs,
  },
  {
    name: HTMLJavascript,
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:"Crafting captivating and intuitive user interfaces that captivate and engage visitors from the first click."
  },
  {
    icon: <FiPenTool />,
    name: 'Frontend Development',
    description: "Bringing life to web experiences through dynamic, responsive, and feature-rich frontend solutions."
  },
  {
    icon: <FiSettings />,
    name: 'Backend Development',
    description: "Architecting and building robust backend systems that fuel seamless data flow and functionality."
  },
  {
    icon: <FiTag />,
    name: 'Deployment',
    description:"Ensuring your vision is accessible to the world by expertly deploying and maintaining your digital masterpiece."
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "From concept to deployment, their seamless process made my online presence a breeze.🌐👏",
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
    "Exceptional frontend and backend expertise, my website's performance has soared! 💻🔥",
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
    "Transformed my vision into a stunning website – their creativity knows no bounds! 🚀🎨",
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at dhirajchaudhari789@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Mumbai, India',
    description: 'Serving clients worldwide',
  },
];
