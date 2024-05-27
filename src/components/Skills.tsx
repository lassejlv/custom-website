import { config } from "@/lib/config";

export default function SkillIcons() {
  return (
    <div className="flex flex-wrap mt-8">
      {config.skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 grayscale hover:filter-none transition duration-300 cursor-pointer"
        >
          {skill.icon}
          <p className="text-white mt-2">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
