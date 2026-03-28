export interface Social {
  platform: 'github' | 'youtube' | 'linkedin' | 'medium';
  url: string;
}

export const socials: Social[] = [
  { platform: 'github', url: 'https://github.com/kush-singhy' },
  { platform: 'youtube', url: 'https://www.youtube.com/@kushsinghy' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/kush-singhy/' },
  { platform: 'medium', url: 'https://medium.com/@kushsinghy02' },
];
