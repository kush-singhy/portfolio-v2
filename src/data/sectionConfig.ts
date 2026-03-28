export interface SectionConfig {
  title: string;
  highlightColor: string;
  rotation: string;
  smWidth: string;
  mdWidth: string;
}

export const sectionConfig: Record<string, SectionConfig> = {
  experience: {
    title: 'Experience',
    highlightColor: 'bg-highlight-blue',
    rotation: 'rotate-1',
    smWidth: 'w-[125px]',
    mdWidth: 'md:w-[155px]',
  },
  projects: {
    title: 'Projects',
    highlightColor: 'bg-highlight-pink',
    rotation: '-rotate-2',
    smWidth: 'w-[95px]',
    mdWidth: 'md:w-[120px]',
  },
  runs: {
    title: 'Runs',
    highlightColor: 'bg-highlight-green',
    rotation: 'rotate-2',
    smWidth: 'w-[60px]',
    mdWidth: 'md:w-[72px]',
  },
};
