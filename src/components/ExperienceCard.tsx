interface ExperienceCardProps {
  date: string;
  title: string;
  role: string;
  description: string[];
  icon: string;
}

export default function ExperienceCard({
  date,
  title,
  role,
  description,
  icon,
}: ExperienceCardProps) {
  return (
    <div className="flex gap-3 w-full">
      <div className="hidden md:block w-7 min-w-7 h-7 max-h-7 rounded-full border-[3px] border-gray-300 bg-white z-10 mt-7 mr-5" />
      <div className="group duration-200 flex-1">
        <p className="text-gray-500 mb-1">{date}</p>
        <div className="border-2 bg-surface border-surface-border rounded-xl p-5 duration-200 group-hover:bg-gray-200">
          <div className="flex gap-3 mb-3">
            <img
              src={icon}
              alt={title}
              className="duration-200 delay-100 group-hover:-rotate-12"
            />
            <div className="flex flex-col">
              <p className="text-lg md:text-xl font-normal">{title}</p>
              <p className="text-base text-gray-500">{role}</p>
            </div>
          </div>
          <ul className="list-disc list-outside ml-6 text-gray-700 font-normal space-y-1">
            {description.map((bullet, index) => (
              <li key={index}>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
