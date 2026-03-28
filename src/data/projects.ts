import noteable from '@/assets/noteable.png';
import curiosityCurve from '@/assets/curiosity_curve.png';

export interface ProjectItem {
  name: string;
  description: string;
  image: string;
  siteUrl?: string;
  sourceUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    name: 'Noteable',
    description:
      'A full-stack web application built on React, NodeJS, ExpressJS and PostgreSQL.',
    image: noteable,
    siteUrl: 'https://usenoteable.com',
    sourceUrl: 'https://github.com/kush-singhy/noteable',
  },
  {
    name: 'Curiosity Curve',
    description:
      'A wordpress website built using Elementor and custom CSS components.',
    image: curiosityCurve,
    siteUrl: 'https://curiositycurve.com.au/',
  },
];
