import ProjectCard from '@/components/ProjectCard';
import Title from '@/components/Title';
import { projects } from '@/data/projects';
import { sectionConfig } from '@/data/sectionConfig';

const config = sectionConfig.projects;

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <Title
        title={config.title}
        highlightColor={config.highlightColor}
        rotation={config.rotation}
        smWidth={config.smWidth}
        mdWidth={config.mdWidth}
      />
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            imgUrl={project.image}
            siteUrl={project.siteUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </div>
    </section>
  );
}
