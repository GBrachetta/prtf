import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Guillermo Brachetta | Developer',
  lang: 'en',
  description: 'Website of Guillermo Brachetta',
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Guillermo Brachetta',
  subtitle: 'Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, placeat, voluptatibus quisquam adipisci repudiandae neque ad maxime temporibus similique enim eveniet, doloribus corrupti doloremque itaque? Soluta nisi tempore doloremque voluptates.',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online',
};

// PROJECTS DATA
export const projectsData = [
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
    img: 'project3.jpg',
    title: 'Parfumier',
    info: 'A perfumes database with reviews, auth and profile management.',
    info2: 'Written in Flask and MongoDB.',
    url: 'https://parfumier.herokuapp.com/perfumes',
    repo: 'https://github.com/GBrachetta/Parfumier',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
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
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
