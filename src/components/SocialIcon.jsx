import PropTypes from 'prop-types';

export default function SocialIcon({ icon, url }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="w-9 h-9 border border-gray-600 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 hover:scale-110 duration-200"
      onClick={handleClick}
    >
      {icon}
    </div>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
