import PropTypes from 'prop-types';

export default function Title({
  title,
  highlightColour,
  rotation,
  smWidth,
  mdWidth,
}) {
  return (
    <div className="relative">
      <p className="relative z-10 text-2xl md:text-3xl font-semibold">
        {title}
      </p>
      <span
        className={`absolute ${highlightColour} ${smWidth} ${mdWidth} h-[20px] bottom-0 -left-1 ${rotation}`}
      />
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  highlightColour: PropTypes.string.isRequired,
  rotation: PropTypes.string.isRequired,
  smWidth: PropTypes.string.isRequired,
  mdWidth: PropTypes.string.isRequired,
};
