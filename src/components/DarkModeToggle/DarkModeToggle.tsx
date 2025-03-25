import React, { ComponentPropsWithRef, useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  ComputerIcon,
  SVGIconProps,
} from "../../icons/Icons";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setTheme(event.matches ? "dark" : "light");
      });
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);
  function handleThemeChange(theme: string) {
    setTheme(theme);
  }
  const themes = [
    { name: "light", icon: SunIcon },
    { name: "dark", icon: MoonIcon },
    { name: "system", icon: ComputerIcon },
  ];
  return (
    <div className="relative flex gap-2 rounded-lg border p-1">
      {themes.map((item) => {
        let active = false;
        if (item.name === theme) {
          active = true;
        }
        return (
          <ThemeButton
            isActive={active}
            icon={item.icon}
            key={item.name}
            onClick={() => handleThemeChange(item.name)}
          />
        );
      })}
    </div>
  );
}

interface ThemeButtonProps extends ComponentPropsWithRef<"button"> {
  isActive: boolean;
  icon: React.ElementType<SVGIconProps>;
}
function ThemeButton(props: ThemeButtonProps) {
  return (
    <div className="relative">
      <button onClick={props.onClick} className="p-1">
        <props.icon
          className={twMerge(
            "size-6",
            props.isActive && "reversed-colors-nobg"
          )}
        />
      </button>
      {props.isActive && (
        <motion.div
          layoutId="themeButtonBG"
          transition={{ type: "tween", ease: "backOut" }}
          className={twMerge(
            "reversed-colors absolute top-0.5 left-0.5 -z-40 size-7 rounded"
          )}
        ></motion.div>
      )}
    </div>
  );
}
