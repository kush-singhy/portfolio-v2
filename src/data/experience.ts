import westpacIcon from '@/assets/westpac.svg';
import unswIcon from '@/assets/unsw.svg';
import amexIcon from '@/assets/amex.svg';

export interface ExperienceItem {
  date: string;
  title: string;
  role: string;
  description: string[];
  icon: string;
}

export const experiences: ExperienceItem[] = [
  {
    date: 'Jul 2024 - Now',
    title: 'Westpac',
    role: 'UI Developer',
    description: [
      "Developing, testing and maintaining code for Westpac's mobile banking app",
      'Implementing features that improve the user experience',
    ],
    icon: westpacIcon,
  },
  {
    date: 'Jan 2020 - May 2024',
    title: 'UNSW',
    role: 'B. Computer Science & B. Actuarial Studies',
    description: [
      'Graduated with a Distinction in both Computer Science & Actuarial Studies.',
      "Recipient of the Dean's Honor List 2021.",
    ],
    icon: unswIcon,
  },
  {
    date: 'Mar 2022 - Sep 2022',
    title: 'American Express',
    role: 'Global Merchant Services Risk Intern',
    description: [
      'Documented risk management strategies to onboard Fintech companies with AMEX.',
      'Prevented 8 cases of credit card fraud by analysing transaction databases using SQL.',
    ],
    icon: amexIcon,
  },
];
