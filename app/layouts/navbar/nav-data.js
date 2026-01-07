import { lazy } from 'react';
import config from '~/config.json';

export const navLinks = [
  {
    label: 'Home',
    pathname: '/',
  },
  {
    label: 'Game Projects',
    pathname: '/game-projects',
  },
  {
    label: 'Personal Projects',
    pathname: '/personal-projects',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Uses',
    pathname: '/uses',
    onlyTopbar: true,
  },
  // {
  //   label: 'Projects',
  //   pathname: '/articles',
  // },
  // {
  //   label: 'Contact',
  //   pathname: '/contact',
  // },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Itch.io',
    url: `${config.itch}`,
    icon: 'itch.io',
  },
  {
    label: 'Upwork',
    url: `${config.upwork}`,
    icon: 'upwork',
  },
];
