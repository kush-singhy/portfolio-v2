import PropTypes from 'prop-types';

export default function ProjectCard({ name, description, imgUrl }) {
  return (
    <div className="relative h-96 flex flex-col gap-10 px-5 pt-5 border-2 bg-[#F3F4F6] border-[#E7E8E9] rounded-2xl group overflow-hidden duration-200 hover:bg-gray-200">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-base font-light text-gray-700">{description}</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg border border-gray-500 px-2 py-1 flex justify-center items-center text-gray-700">
            Visit Site
          </button>
          <button className="rounded-lg border border-gray-500 px-2 py-1 flex justify-center items-center text-gray-700">
            View Source Code
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt="Noteable"
          className="w-3/4 rounded-t-xl shadow-xl absolute block top-32 group-hover:-translate-y-3 duration-200"
        />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
