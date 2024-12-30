import PropTypes from 'prop-types';

export default function ProjectCard({
  name,
  description,
  imgUrl,
  siteUrl,
  sourceCode,
}) {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative h-[400px] flex flex-col gap-10 px-5 pt-5 border-2 bg-[#F3F4F6] border-[#E7E8E9] rounded-2xl group overflow-hidden duration-200 hover:bg-gray-200">
      <div className="flex justify-between items-start gap-3">
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-2xl font-medium">{name}</p>
          <p className="text-base font-light text-gray-500 max-w-[440px]">
            {description}
          </p>
        </div>
        <div className="flex items-end gap-2">
          {siteUrl && (
            <button
              onClick={() => handleClick(siteUrl)}
              className="rounded-lg border-2 border-gray-400 px-2 py-1 flex justify-center items-center text-gray-700 text-sm shadow-md hover:bg-gray-300 duration-200"
            >
              Visit Site
            </button>
          )}
          {sourceCode && (
            <button
              onClick={() => handleClick(sourceCode)}
              className="rounded-lg border-2 border-gray-400 px-2 py-1 flex justify-center items-center text-gray-700 text-sm shadow-md hover:bg-gray-300 duration-200"
            >
              View Source Code
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt="Noteable"
          className="w-3/4 rounded-t-xl shadow-xl absolute top-36 group-hover:-translate-y-3 duration-200"
        />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  siteUrl: PropTypes.string,
  sourceCode: PropTypes.string,
};
