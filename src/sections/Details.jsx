import heroImage from '../assets/cartoon-headshot.jpg';
import { FiDownloadCloud } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaMediumM } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import jsIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.svg';
import nodeIcon from '../assets/nodejs.svg';
import tailwindIcon from '../assets/tailwind.svg';
import postgresIcon from '../assets/postgres.svg';
import figmaIcon from '../assets/figma.svg';

export default function Details() {
  return (
    <section
      id="details"
      className="noscrollbar shrink-0 p-6 lg:sticky lg:top-0 lg:h-screen lg:w-[400px] lg:overflow-y-auto lg:p-16 lg:pr-0 lg:pb-24"
    >
      <img
        src={heroImage}
        alt="Kush Singhy"
        className="rounded-full w-32 h-32 mb-7"
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-gray-800 min-w-72 mb-2">
          Kush Singhy
        </h1>
        <div className="flex gap-4 mb-3">
          <div
            id="location"
            className="flex gap-2 items-center text-gray-500 min-w-40"
          >
            <FiMapPin className="w-5 h-5" />
            <p>Sydney, Australia</p>
          </div>
          <div className="flex gap-2 items-center text-gray-500 min-w-40">
            <FiDownloadCloud />
            <p>CV</p>
          </div>
        </div>
      </div>

      <div className="text-xl font-medium text-gray-600 mb-7">
        A software developer who likes to make pretty apps and run kinda far
      </div>

      <div id="socials" className="mb-7">
        <p className="text-gray-800 mb-2">Find me here</p>
        <div id="social-icons" className="flex gap-2">
          <div className="w-9 h-9 border border-gray-600 rounded-full flex justify-center items-center">
            <FiGithub className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 border border-gray-600 rounded-full flex justify-center items-center">
            <FiYoutube className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 border border-gray-600 rounded-full flex justify-center items-center">
            <FiLinkedin className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 border border-gray-600 rounded-full flex justify-center items-center">
            <FaMediumM className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div id="tech-stack">
        <p className="text-gray-800 mb-2">Current Tech</p>
        <div id="tech-icons" className="flex gap-2">
          <img src={jsIcon} alt="Javascript" className="w-9 h-9" />
          <img src={reactIcon} alt="React" className="w-9 h-9" />
          <img src={nodeIcon} alt="NodeJS" className="w-9 h-9" />
          <img src={tailwindIcon} alt="Tailwind" className="w-9 h-9" />
          <img src={postgresIcon} alt="Postgres" className="w-9 h-9" />
          <img src={figmaIcon} alt="Figma" className="w-9 h-9" />
        </div>
      </div>
    </section>
  );
}
