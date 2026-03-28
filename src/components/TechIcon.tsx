interface TechIconProps {
  icon: string;
  name: string;
}

export default function TechIcon({ icon, name }: TechIconProps) {
  return (
    <img
      src={icon}
      alt={name}
      className="w-9 h-9 hover:scale-110 duration-200"
    />
  );
}
