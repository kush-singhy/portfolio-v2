interface ProjectCardProps {
  name: string;
  description: string;
  imgUrl: string;
  siteUrl?: string;
  sourceUrl?: string;
}

export default function ProjectCard({
  name,
  description,
  imgUrl,
  siteUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <div className="relative h-[400px] flex flex-col gap-2 px-5 pt-5 border-2 bg-surface border-surface-border rounded-2xl group overflow-hidden duration-200 hover:bg-gray-200">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between items-start">
        <p className="text-xl md:text-2xl font-normal mt-[2px]">{name}</p>
        <div className="flex items-end gap-2">
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-400 px-2 py-1 flex justify-center items-center text-gray-700 text-sm hover:bg-gray-300 duration-200"
            >
              Visit Site
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-400 px-2 py-1 flex justify-center items-center text-gray-700 text-sm hover:bg-gray-300 duration-200"
            >
              View Source Code
            </a>
          )}
        </div>
      </div>
      <p className="text-base font-light text-gray-500">{description}</p>

      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt={name}
          className="w-3/4 rounded-t-xl shadow-xl absolute top-48 md:top-36 group-hover:-translate-y-3 duration-200"
        />
      </div>
    </div>
  );
}
