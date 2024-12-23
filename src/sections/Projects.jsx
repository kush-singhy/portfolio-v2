import noteable from '../assets/noteable.png';
import curiosity_curve from '../assets/curiosity_curve.png';

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8">
      <p className="text-2xl font-bold">Projects</p>
      <div className="flex flex-col gap-10 px-5 pt-5 border border-gray-500 rounded-2xl">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">Noteable</p>
            <p className="text-base text-gray-700">
              A full-stack web application
            </p>
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
            src={noteable}
            alt="Noteable"
            className="w-3/4 rounded-t-xl border-t border-x border-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 px-5 pt-5 border border-gray-500 rounded-2xl">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">Curiosity Curve</p>
            <p className="text-base text-gray-700">A wordpress website</p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-lg border border-gray-500 px-2 py-1 flex justify-center items-center text-gray-700">
              Visit Site
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={curiosity_curve}
            alt="Curiosity Curve"
            className="rounded-t-xl border-t border-x border-gray-500 w-3/4 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
