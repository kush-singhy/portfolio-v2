export default function Runs() {
  return (
    <section id="runs" className="flex flex-col gap-4">
      <div className="relative">
        <p className="relative z-10 text-2xl font-bold">Runs</p>
        <span className="absolute bg-[#ABE2CB] w-[60px] h-[15px] bottom-0 -left-1 rotate-2" />
      </div>
      <div>
        <p>Longest Run</p>
      </div>
      <div>
        <p>Fastest 5K</p>
      </div>
      <div>
        <p>Fastest 10K</p>
      </div>
      <div>
        <p>Recent Runs</p>
      </div>
    </section>
  );
}
