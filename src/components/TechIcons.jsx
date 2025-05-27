import PropTypes from 'prop-types';
import { RiNextjsLine } from 'react-icons/ri';
import { RiJavascriptLine } from 'react-icons/ri';
import { RiSupabaseLine } from 'react-icons/ri';
import { RxFigmaLogo } from 'react-icons/rx';
import { RiReactjsLine } from 'react-icons/ri';

export default function TechIcons() {
  return (
    <div id="tech-icons" className="flex gap-2">
      <TechIcon>
        <RiJavascriptLine className="w-7 h-7" />
      </TechIcon>
      <TechIcon>
        <RiReactjsLine className="w-7 h-7" />
      </TechIcon>
      <TechIcon>
        <RiNextjsLine className="w-7 h-7" />
      </TechIcon>
      <TechIcon>
        <RiSupabaseLine className="w-7 h-7" />
      </TechIcon>
      <TechIcon>
        <RxFigmaLogo className="w-7 h-7" />
      </TechIcon>
    </div>
  );
}

export function TechIcon({ children }) {
  return (
    <div className={`w-9 h-9 rounded-full flex justify-center items-center`}>
      {children}
    </div>
  );
}

TechIcon.propTypes = {
  children: PropTypes.node.isRequired,
};
