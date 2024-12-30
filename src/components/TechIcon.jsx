import PropTypes from 'prop-types';

export default function TechIcon({ icon, name }) {
  return (
    <img
      src={icon}
      alt={name}
      className="w-9 h-9 hover:scale-110 duration-200"
    />
  );
}

TechIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
