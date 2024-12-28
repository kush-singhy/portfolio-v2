import PropTypes from 'prop-types';
import { motion } from 'motion/react';

export default function SocialIcon({ icon, url }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <motion.div
      className="w-9 h-9 border border-gray-600 rounded-full flex justify-center items-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
    >
      {icon}
    </motion.div>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
