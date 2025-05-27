import TechIcon from '../components/TechIcon';
import heroImage from '../assets/cartoon-headshot.jpg';
import SocialIcons from '../components/SocialIcons';
import { FiDownloadCloud } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';

import jsIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.svg';
import swiftIcon from '../assets/swift.svg';
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
          className="rounded-full w-16 h-16 md:w-32 md:h-32 mb-4 md:mb-7"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-gray-800 md:min-w-72 md:mb-2">
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
                className="flex gap-2 items-center hover:bg-gray-300 px-2 py-1 rounded-lg hover:text-gray-800 duration-200 cursor-pointer"
                onClick={handleCV}
              >
                <FiDownloadCloud />
                <p>CV</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg text-gray-700 mb-4 leading-6">
        A software developer who likes to make cool apps and run long distances.
      </div>

      <div id="socials" className="mb-7">
        <SocialIcons />
      </div>

      <div id="tech-stack" className="mb-16">
        <p className="text-gray-800 mb-2">Current Tech</p>
        <div id="tech-icons" className="flex gap-2">
          <TechIcon icon={swiftIcon} name="Swift" />
          <TechIcon icon={jsIcon} name="Javascript" />
          <TechIcon icon={reactIcon} name="React" />
          <TechIcon icon={postgresIcon} name="Postgres" />
          <TechIcon icon={figmaIcon} name="Figma" />
        </div>
      </div>
    </section>
  );
}
