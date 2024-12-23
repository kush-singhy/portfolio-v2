/* eslint-disable react/prop-types */
export default function ProjectCard({ name, description, imgUrl }) {
  return (
    <div className="flex flex-col gap-10 px-5 pt-5 border border-gray-500 rounded-2xl">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-base font-light text-gray-700">{description}</p>
        </div>
        <div className="flex gap-3">
          <div className="rounded-lg border border-gray-500 px-2 py-1 flex justify-center items-center text-gray-700">
            Visit Site
          </div>
          <div className="rounded-lg border border-gray-500 px-2 py-1 flex justify-center items-center text-gray-700">
            View Source Code
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt="Noteable"
          className="w-3/4 rounded-t-xl border-t border-x border-gray-500"
        />
      </div>
    </div>
  );
}
