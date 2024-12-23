import westpacIcon from '../assets/westpac.svg';
import unswIcon from '../assets/unsw.svg';

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-4">
      <p className="text-2xl font-bold">Experience</p>
      <div className="space-y-8 relative before:absolute before:mt-7 before:ml-3 before:h-[calc(100%-28px)] before:w-[3px] before:bg-gradient-to-tl before:from-transparent before:bg-slate-300 before:to-transparent">
        <div className="flex gap-3">
          <div className="w-7 min-w-7 h-7 max-h-7 rounded-full border-[3px] border-gray-300 bg-white z-10 mt-7"></div>
          <div>
            <p className="text-gray-500 mb-1">Jul 2024 - Now</p>
            <div className="border border-gray-400 rounded-xl p-5">
              <div className="flex gap-3 mb-3">
                <img src={westpacIcon} alt="Westpac" />
                <div className="flex flex-col">
                  <p className="text-xl font-medium">Westpac</p>
                  <p className="text-base text-gray-500 font-normal">
                    UI Developer
                  </p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue sapien et odio feugiat, vitae sollicitudin
                quam rhoncus.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-7 min-w-7 h-7 max-h-7 rounded-full border-[3px] border-gray-300 bg-white z-10 mt-7"></div>
          <div>
            <p className="text-gray-500 mb-1">Jan 2020 - May 2024</p>
            <div className="border border-gray-400 rounded-xl p-5">
              <div className="flex gap-3 mb-3">
                <img src={unswIcon} alt="UNSW" />
                <div className="flex flex-col">
                  <p className="text-xl font-medium">UNSW</p>
                  <p className="text-base text-gray-500 font-normal">
                    B. Computer Science & B. Actuarial Studies
                  </p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue sapien et odio feugiat, vitae sollicitudin
                quam rhoncus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button>Show all</button>
    </section>
  );
}
