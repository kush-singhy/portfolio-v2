import PropTypes from 'prop-types';

export default function TechIcon({ icon, name }) {
  return <img src={icon} alt={name} className="w-8 h-8 duration-200" />;
}

TechIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
