import './App.css';
import heroImage from './assets/cartoon-headshot.jpg';
import { FiMapPin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaMediumM } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import jsIcon from './assets/javascript.svg';
import reactIcon from './assets/react.svg';
import nodeIcon from './assets/nodejs.svg';
import tailwindIcon from './assets/tailwind.svg';
import postgresIcon from './assets/postgres.svg';
import figmaIcon from './assets/figma.svg';
import westpacIcon from './assets/westpac.svg';
import unswIcon from './assets/unsw.svg';

function App() {
  return (
    <>
      <div id="hero" className="flex flex-col gap-16 lg:flex-row">
        <div id="details" className="flex-1">
          <img
            src={heroImage}
            alt="Kush Singhy"
            className="rounded-full w-32 h-32 mb-7"
          />

          <div className="flex flex-col gap-2 mb-5">
            <h1 className="text-5xl font-bold text-gray-800 min-w-72">
              Kush Singhy
            </h1>
            <div
              id="location"
              className="flex gap-1 items-center text-gray-500 min-w-40"
            >
              <FiMapPin className="w-5 h-5" />
              <p>Sydney, Australia</p>
            </div>
          </div>

          <p className="text-xl font-medium text-gray-600 mb-7">
            A software developer who likes to make pretty apps and run kinda far
          </p>

          <div id="socials" className="mb-6">
            <p className="mb-3 text-gray-800">Find me here</p>
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
            <p className="mb-3 text-gray-800">Current Technologies</p>
            <div id="tech-icons" className="flex gap-2">
              <img src={jsIcon} alt="Javascript" className="w-9 h-9" />
              <img src={reactIcon} alt="React" className="w-9 h-9" />
              <img src={nodeIcon} alt="NodeJS" className="w-9 h-9" />
              <img src={tailwindIcon} alt="Tailwind" className="w-9 h-9" />
              <img src={postgresIcon} alt="Postgres" className="w-9 h-9" />
              <img src={figmaIcon} alt="Figma" className="w-9 h-9" />
            </div>
          </div>
        </div>

        <div id="experience" className="flex-1 flex flex-col gap-5 py-6">
          <p className="text-2xl font-medium">Experience</p>
          <div className="space-y-8 relative before:absolute before:mt-7 before:ml-3 before:h-full before:w-[3px] before:bg-gradient-to-tl before:from-transparent before:bg-slate-300 before:to-transparent">
            <div className="flex gap-3">
              <div className="w-7 min-w-7 h-7 max-h-7 rounded-full border-[3px] border-gray-300 bg-white z-10 mt-7"></div>
              <div>
                <p className="text-gray-500 mb-1">Jul 2024 - Now</p>
                <div className="border border-gray-400 rounded-xl p-5">
                  <div className="flex gap-3 mb-3">
                    <img src={westpacIcon} alt="Westpac" />
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold">Westpac</p>
                      <p className="text-base text-gray-500 font-normal">
                        UI Developer
                      </p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum congue sapien et odio feugiat, vitae sollicitudin
                    quam rhoncus.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 min-w-7 h-7 max-h-7 rounded-full border-[3px] border-gray-300 bg-white z-10 mt-7"></div>
              <div>
                <p className="text-gray-500 mb-1">Jan 2020 - May 2024</p>
                <div className="border border-gray-400 rounded-xl p-5">
                  <div className="flex gap-3 mb-3">
                    <img src={unswIcon} alt="UNSW" />
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold">UNSW</p>
                      <p className="text-base text-gray-500 font-normal">
                        B. Computer Science & B. Actuarial Studies
                      </p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum congue sapien et odio feugiat, vitae sollicitudin
                    quam rhoncus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button>Show all</button>
        </div>
      </div>
    </>
  );
}

export default App;
