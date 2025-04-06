import React, { ComponentProps, useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  ComputerIcon,
  SVGIconProps,
} from "../../icons/icons";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export function DarkModeToggle() {
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
    <div className="border-primary-600 dark:border-secondary-200 flex justify-evenly gap-2 rounded-lg border p-1">
      {themes.map((item) => {
        let active = false;
        if (item.name === theme) {
          active = true;
        }
        return (
          <AnimatePresence key={item.name}>
            <ThemeButton
              name={item.name}
              isActive={active}
              icon={item.icon}
              onClick={() => handleThemeChange(item.name)}
            />
          </AnimatePresence>
        );
      })}
    </div>
  );
}

interface ThemeButtonProps extends ComponentProps<"button"> {
  name: string;
  isActive: boolean;
  icon: React.ElementType<SVGIconProps>;
}
function ThemeButton(props: ThemeButtonProps) {
  return (
    <div className="relative">
      <button
        aria-label={`theme: ${props.name}`}
        onClick={props.onClick}
        className="p-1"
      >
        <props.icon
          className={twMerge(
            "text-primary-600 dark:text-secondary-200 relative z-10 size-6 transition-colors duration-200",
            props.isActive && "text-secondary-200 dark:text-primary-600",
          )}
        />
      </button>
      <AnimatePresence>
        {props.isActive && (
          <motion.div
            layoutId="themeButtonBG"
            transition={{ type: "spring", duration: 0.5 }}
            className={twMerge(
              "bg-primary-600 dark:bg-secondary-200 absolute top-0.5 left-0.5 size-7 rounded",
            )}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
