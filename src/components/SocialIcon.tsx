import { ReactNode } from 'react';

interface SocialIconProps {
  icon: ReactNode;
  url: string;
  label: string;
}

export default function SocialIcon({ icon, url, label }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 border border-gray-600 rounded-full flex justify-center items-center hover:bg-gray-300 hover:scale-110 duration-200"
    >
      {icon}
    </a>
  );
}
