import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/KHALIL-SAA',
  linkedin: 'https://www.linkedin.com/in/khalile-saadate-78a65024a/',
  mail: 'ksaadate@gmail.com',
  instagram: '#',
  medium: '#',
  discord: '#',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Université le Havre Normandy',
    link: 'https://www.univ-lehavre.fr/fr/',
    date: '2021 - 2024',
  },
]

export const EXPERIENCE = [
  {
    company: 'Imaginamos',
    link: 'https://imaginamos.com/',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    end: '2021',
    tasks: [
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  },
]
