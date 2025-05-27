import PropTypes from 'prop-types';
import { BsSubstack } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';

export default function SocialIcons() {
  return (
    <div id="social-icons" className="flex gap-2">
      <SocialIcon
        icon={<FiGithub className="w-5 h-5" />}
        url="https://github.com/kush-singhy"
      />
      <SocialIcon
        icon={<FiLinkedin className="w-5 h-5" />}
        url="https://www.linkedin.com/in/kush-singh-yadav/"
      />
      <SocialIcon
        icon={<FiYoutube className="w-5 h-5" />}
        url="https://www.youtube.com/@kushsinghy"
      />
      <SocialIcon
        icon={<BsSubstack className="w-4 h-4" />}
        url="https://kushsinghy.substack.com/"
      />
    </div>
  );
}

export function SocialIcon({ icon, url }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition-all duration-200`}
      onClick={handleClick}
    >
      {icon}
    </div>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};
