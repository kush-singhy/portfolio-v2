import PropTypes from 'prop-types';
import { motion } from 'motion/react';

export default function ExperienceCard({
  date,
  title,
  role,
  description,
  icon,
}) {
  return (
    <div className="flex gap-3">
      <div className="w-7 min-w-7 h-7 max-h-7 rounded-full border-[3px] border-gray-300 bg-white z-10 mt-7"></div>
      <motion.div
        whileHover={{ x: 10 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <p className="text-gray-500 mb-1">{date}</p>
        <div className="border border-gray-400 rounded-xl p-5 cursor-pointer">
          <div className="flex gap-3 mb-3">
            <img src={icon} alt={title} />
            <div className="flex flex-col">
              <p className="text-xl font-medium">{title}</p>
              <p className="text-base ">{role}</p>
            </div>
          </div>
          <p className="text-gray-500 font-normal">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

ExperienceCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
