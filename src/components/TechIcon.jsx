import PropTypes from 'prop-types';
import { motion } from 'motion/react';

export default function TechIcon({ icon, name }) {
  return (
    <motion.img
      src={icon}
      alt={name}
      className="w-9 h-9"
      whileHover={{ scale: 1.1 }}
    />
  );
}

TechIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
