import { ReactElement } from 'react';
import SocialIcon from '@/components/SocialIcon';
import TechIcon from '@/components/TechIcon';
import { personal } from '@/data/personal';
import { socials, Social } from '@/data/socials';
import { techStack } from '@/data/techStack';
import { FiDownloadCloud, FiMapPin, FiGithub, FiYoutube, FiLinkedin } from 'react-icons/fi';
import { FaMediumM } from 'react-icons/fa';

const socialIconMap: Record<Social['platform'], ReactElement> = {
  github: <FiGithub className="w-5 h-5" />,
  youtube: <FiYoutube className="w-5 h-5" />,
  linkedin: <FiLinkedin className="w-5 h-5" />,
  medium: <FaMediumM className="w-5 h-5" />,
};

export default function Details() {
  return (
    <section
      id="details"
      className="noscrollbar shrink-0 p-6 w-full lg:sticky lg:top-0 lg:h-screen lg:w-[400px] lg:overflow-y-auto lg:p-16 lg:pr-0 lg:pb-24"
    >
      <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
        <img
          src={personal.headshot}
          alt={personal.name}
          className="rounded-full w-20 h-20 md:w-32 md:h-32 mb-4 md:mb-7"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 md:min-w-72 md:mb-2">
            {personal.name}
          </h1>
          <div className="flex md:gap-3 mb-3">
            <div className="flex gap-2 items-center text-gray-500 min-w-40">
              <FiMapPin className="w-5 h-5" />
              <p>{personal.location}</p>
            </div>
            <div className="flex mr-auto text-gray-500 min-w-40">
              <a
                href={personal.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:scale-[1.02] hover:bg-gray-200 px-2 py-1 rounded-lg hover:text-gray-800 duration-200"
              >
                <FiDownloadCloud />
                <p>CV</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg md:text-xl font-light text-gray-600 mb-7">
        {personal.tagline}
      </div>

      <div className="mb-7">
        <p className="text-gray-800 mb-2">Find me here</p>
        <div className="flex gap-2">
          {socials.map((social) => (
            <SocialIcon
              key={social.platform}
              icon={socialIconMap[social.platform]}
              url={social.url}
              label={social.platform}
            />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <p className="text-gray-800 mb-2">Current Tech</p>
        <div className="flex gap-2">
          {techStack.map((tech) => (
            <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
