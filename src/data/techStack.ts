import jsIcon from '@/assets/javascript.svg';
import reactIcon from '@/assets/react.svg';
import nodeIcon from '@/assets/nodejs.svg';
import tailwindIcon from '@/assets/tailwind.svg';
import postgresIcon from '@/assets/postgres.svg';
import figmaIcon from '@/assets/figma.svg';

export interface TechItem {
  name: string;
  icon: string;
}

export const techStack: TechItem[] = [
  { name: 'Javascript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'NodeJS', icon: nodeIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'Postgres', icon: postgresIcon },
  { name: 'Figma', icon: figmaIcon },
];
