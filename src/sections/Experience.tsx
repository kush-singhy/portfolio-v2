import ExperienceCard from '@/components/ExperienceCard';
import Title from '@/components/Title';
import { experiences } from '@/data/experience';
import { sectionConfig } from '@/data/sectionConfig';

const config = sectionConfig.experience;

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <Title
        title={config.title}
        highlightColor={config.highlightColor}
        rotation={config.rotation}
        smWidth={config.smWidth}
        mdWidth={config.mdWidth}
      />
      <div className="before:hidden before:md:block space-y-10 relative before:absolute before:mt-7 before:ml-3 before:h-[calc(100%-28px)] before:w-[3px] before:bg-gradient-to-tl before:from-transparent before:bg-slate-300 before:to-transparent">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.title}
            date={exp.date}
            title={exp.title}
            role={exp.role}
            description={exp.description}
            icon={exp.icon}
          />
        ))}
      </div>
    </section>
  );
}
