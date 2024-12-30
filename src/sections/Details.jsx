import SocialIcon from '../components/SocialIcon';
import TechIcon from '../components/TechIcon';
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
import cvFile from '../assets/cv.pdf';

export default function Details() {
  const handleCV = () => {
    window.open(cvFile, '_blank');
  };

  return (
    <section
      id="details"
      className="noscrollbar shrink-0 p-6 w-full lg:sticky lg:top-0 lg:h-screen lg:w-[400px] lg:overflow-y-auto lg:p-16 lg:pr-0 lg:pb-24"
    >
      <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
        <img
          src={heroImage}
          alt="Kush Singhy"
          className="rounded-full w-20 h-20 md:w-32 md:h-32 mb-4 md:mb-7"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 md:min-w-72 md:mb-2">
            Kush Singhy
          </h1>
          <div className="flex md:gap-3 mb-3">
            <div
              id="location"
              className="flex gap-2 items-center text-gray-500 min-w-40"
            >
              <FiMapPin className="w-5 h-5" />
              <p>Sydney, Australia</p>
            </div>
            <div className="flex mr-auto text-gray-500 min-w-40">
              <div
                className="flex gap-2 items-center hover:scale-[1.02] hover:bg-gray-200 px-2 py-1 rounded-lg hover:text-gray-800 duration-200 cursor-pointer"
                onClick={handleCV}
              >
                <FiDownloadCloud />
                <p>CV</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg md:text-xl font-light text-gray-600 mb-7">
        A software developer who likes to make cool apps, run long distances and
        read good books.
      </div>

      <div id="socials" className="mb-7">
        <p className="text-gray-800 mb-2">Find me here</p>
        <div id="social-icons" className="flex gap-2">
          <SocialIcon
            icon={<FiGithub className="w-5 h-5" />}
            url="https://github.com/kush-singhy"
          />
          <SocialIcon
            icon={<FiYoutube className="w-5 h-5" />}
            url="https://www.youtube.com/@kushsinghy"
          />
          <SocialIcon
            icon={<FiLinkedin className="w-5 h-5" />}
            url="https://www.linkedin.com/in/kush-singhy/"
          />
          <SocialIcon
            icon={<FaMediumM className="w-5 h-5" />}
            url="https://medium.com/@kushsinghy02"
          />
        </div>
      </div>

      <div id="tech-stack" className="mb-16">
        <p className="text-gray-800 mb-2">Current Tech</p>
        <div id="tech-icons" className="flex gap-2">
          <TechIcon icon={jsIcon} name="Javascript" />
          <TechIcon icon={reactIcon} name="React" />
          <TechIcon icon={nodeIcon} name="NodeJS" />
          <TechIcon icon={tailwindIcon} name="Tailwind" />
          <TechIcon icon={postgresIcon} name="Postgres" />
          <TechIcon icon={figmaIcon} name="Figma" />
        </div>
      </div>
    </section>
  );
}
