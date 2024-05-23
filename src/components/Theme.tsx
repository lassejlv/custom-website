import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

export default function Theme() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("lasse:theme");

    if (!localTheme) {
      localStorage.setItem("lasse:theme", "dark");
      setTheme("dark");
    } else {
      setTheme(localTheme);
    }
  }, [theme]);

  const updateTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("lasse:theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("lasse:theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <span className="cursor-pointer" onClick={updateTheme}>
      {theme === "dark" && <MoonStar className="stroke-zinc-500" />}
      {theme === "light" && <Sun className="stroke-zinc-500" />}
    </span>
  );
}
