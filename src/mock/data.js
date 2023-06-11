import { nanoid } from 'nanoid';
import cv from '../images/cv.pdf';

// HEAD DATA
export const headData = {
  title: 'Guillermo Brachetta | Web Developer',
  lang: 'en',
  description: 'Website of Guillermo Brachetta',
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Guillermo Brachetta.',
  subtitle: 'Web Developer.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.png',
  paragraphOne:
    'I love to create, to sort challenges, to defy limitations, to conquer tenacious obstacles, to express myself, to learn.',
  paragraphTwo:
    'I found in development the space to exploit these passions. Through React. Through Next.js. Through Django and the intricaties  of databases.',
  paragraphThree: 'I love the freedom it gives me.',
  resume: cv,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'White Queen',
    info: 'SPA built with Next.js.',
    info2: 'Branding, development, contact form, for a Dutch company.',
    url: 'https://www.whitequeen.nl/',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: "Mozart's Dice Game",
    info: 'A music randomizer created in Javascript.',
    info2: 'For the artist in me. Music composed by myself as well ;)',
    url: 'https://loving-mozart.netlify.app/',
    repo: 'https://github.com/GBrachetta/Musical-Dice',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'The Artist',
    info: 'My portfolio website for my activities as a musician.',
    info2: 'Developed with Django, includes e-commerce.',
    url: 'https://guillermo-brachetta.herokuapp.com/',
    repo: 'https://github.com/GBrachetta/guillermo',
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'CarHub',
    info: 'A mock portal for a car hire shop',
    info2: 'Developed with Nextjs 13.',
    url: 'https://carhub-three.vercel.app/',
    repo: 'https://github.com/GBrachetta/car-showcase',
  },
  // {
  //   id: nanoid(),
  //   img: 'project3.jpg',
  //   title: 'Parfumier',
  //   info: 'A perfumes database with reviews, auth and profile management.',
  //   info2: 'Written in Flask and MongoDB.',
  //   url: 'https://parfumier.herokuapp.com/perfumes',
  //   repo: 'https://github.com/GBrachetta/Parfumier',
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Shall we work together? Awesome!',
  btn: "Let's talk",
  email: 'brachetta@me.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/brachetta',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/guillermo-brachetta-027764174/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GBrachetta',
    },
  ],
};
