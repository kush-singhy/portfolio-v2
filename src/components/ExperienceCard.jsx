import PropTypes from 'prop-types';

export default function ExperienceCard({
  date,
  title,
  role,
  description,
  icon,
}) {
  return (
    <div className="flex gap-3">
      <div className="w-7 min-w-7 h-7 max-h-7 rounded-full border-[3px] border-gray-300 bg-white z-10 mt-7 mr-5"></div>
      <div className="group duration-200">
        <p className="text-gray-500 mb-1">{date}</p>
        <div className="border-2 bg-[#F3F4F6] border-[#E7E8E9] rounded-xl p-5 duration-200 group-hover:bg-gray-200">
          <div className="flex gap-3 mb-3">
            <img
              src={icon}
              alt={title}
              className="drop-shadow-sm duration-200 delay-100 group-hover:-rotate-12"
            />
            <div className="flex flex-col">
              <p className="text-xl font-medium">{title}</p>
              <p className="text-base ">{role}</p>
            </div>
          </div>
          <p className="text-gray-500 font-normal">{description}</p>
        </div>
      </div>
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
