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

type Config = {
  title: string;
  github_url: string;
  skills: { name: string; icon: JSX.Element }[];
  navLinks: { name: string; path: string }[];
  projects: { name: string; description: string; link?: string }[];
};

const size = 30;

export const config: Config = {
  title: "lasse",
  github_url: "https://github.com/lassejlv/custom-website",
  skills: [
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
      icon: <SiPostgresql className="text-blue-400" size={size} />,
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
  ],
  navLinks: [
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  projects: [
    {
      name: "Rapide",
      description: "a simple, fast, and easy-to-use web server framework for Bun.js",
      link: "https://github.com/lassejlv/rapide",
    },
    {
      name: "Includer.js",
      description:
        "A tiny JavaScript library that enables you to inject HTML content into the current page from external HTML files.",
      link: "https://github.com/lassejlv/includerjs",
    },
    {
      name: "Movie Swiper",
      description: "A global discord that allows you to swipe between movies. Over 2000 humans uses it every day.",
      link: "https://movieswiper.xyz",
    },
  ],
};
