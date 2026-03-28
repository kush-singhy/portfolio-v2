interface TitleProps {
  title: string;
  highlightColor: string;
  rotation: string;
  smWidth: string;
  mdWidth: string;
}

export default function Title({
  title,
  highlightColor,
  rotation,
  smWidth,
  mdWidth,
}: TitleProps) {
  return (
    <div className="relative">
      <p className="relative z-10 text-2xl md:text-3xl font-semibold">
        {title}
      </p>
      <span
        className={`absolute ${highlightColor} ${smWidth} ${mdWidth} h-[20px] bottom-0 -left-1 ${rotation}`}
      />
    </div>
  );
}
