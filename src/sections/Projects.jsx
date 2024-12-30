import ProjectCard from '../components/ProjectCard';

import noteable from '../assets/noteable.png';
import curiosity_curve from '../assets/curiosity_curve.png';

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <div className="relative">
        <p className="relative z-10 text-2xl font-bold">Projects</p>
        <span className="absolute bg-[rgb(249,220,248)] w-[95px] h-[15px] bottom-0 -left-1 -rotate-2" />
      </div>
      <div className="flex flex-col gap-10">
        <ProjectCard
          name="Noteable"
          description="A full-stack web application"
          imgUrl={noteable}
          siteUrl="https://usenoteable.com"
          sourceCode="https://github.com/kush-singhy/noteable"
        />
        <ProjectCard
          name="Curiosity Curve"
          description="A wordpress website"
          imgUrl={curiosity_curve}
          siteUrl="https://curiositycurve.com.au/"
        />
      </div>
    </section>
  );
}
