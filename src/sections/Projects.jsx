import ProjectCard from '../components/ProjectCard';
import Title from '../components/Title';
import noteable from '../assets/noteable.png';
import curiosity_curve from '../assets/curiosity_curve.png';

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <Title
        title="Projects"
        highlightColour="bg-[rgb(249,220,248)]"
        rotation="-rotate-2"
        smWidth="w-[95px]"
        mdWidth="md:w-[120px]"
      />
      <div className="flex flex-col gap-10">
        <ProjectCard
          name="Noteable"
          description="A full-stack web application built on React, NodeJS, ExpressJS and PostgreSQL."
          imgUrl={noteable}
          siteUrl="https://usenoteable.com"
          sourceCode="https://github.com/kush-singhy/noteable"
        />
        <ProjectCard
          name="Curiosity Curve"
          description="A wordpress website built using Elementor and custom CSS components."
          imgUrl={curiosity_curve}
          siteUrl="https://curiositycurve.com.au/"
        />
      </div>
    </section>
  );
}
