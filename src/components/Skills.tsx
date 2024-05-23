import {
  SiBun,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

const size = 30;

type Skill = {
  name: string;
  icon: JSX.Element;
};

export default function SkillIcons() {
  const skills: Skill[] = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" size={size} />,
    },
    {
      name: "Bun.js",
      icon: <SiBun className="text-orange-200" size={size} />,
    },
    {
      name: "React",
      icon: <SiReact className="text-blue-500" size={size} />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-white" size={size} />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" size={size} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-500" size={size} />,
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-blue-500" size={size} />,
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500" size={size} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" size={size} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" size={size} />,
    },
    {
      name: "Go",
      icon: <SiGo className="text-sky-400" size={size} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" size={size} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-white" size={size} />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-white" size={size} />,
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-indigo-400" size={size} />,
    },
    {
      name: "Github",
      icon: <SiGithub className="text-white" size={size} />,
    },
    {
      name: "Visual Studio Code",
      icon: <SiVisualstudiocode className="text-blue-500" size={size} />,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-white" size={size} />,
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-teal-600" size={size} />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-500" size={size} />,
    },
    {
      name: "Railway",
      icon: <SiRailway className="text-white " size={size} />,
    },
    {
      name: "Ubuntu",
      icon: <SiUbuntu className="text-orange-500" size={size} />,
    },
  ];

  return (
    <div className="flex flex-wrap mt-8">
      {skills.map((skill, index) => (
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
