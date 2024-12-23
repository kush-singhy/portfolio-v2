/* eslint-disable react/prop-types */
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
      <div>
        <p className="text-gray-500 mb-1">{date}</p>
        <div className="border border-gray-400 rounded-xl p-5">
          <div className="flex gap-3 mb-3">
            <img src={icon} alt="Westpac" />
            <div className="flex flex-col">
              <p className="text-xl font-medium">{title}</p>
              <p className="text-base text-gray-500 font-normal">{role}</p>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
