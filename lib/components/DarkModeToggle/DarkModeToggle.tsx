import React, { ComponentProps, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import {
  MoonIcon,
  SunIcon,
  ComputerIcon,
  SVGIconProps,
} from "../../icons/icons";

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
    <div className="border-primary-dark dark:border-secondary-light flex justify-evenly gap-2 rounded-lg border p-1">
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

type ThemeButtonProps = {
  name: string;
  isActive: boolean;
  icon: React.ElementType<SVGIconProps>;
} & ComponentProps<"button">;

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
            "text-primary-dark dark:text-secondary-light duration-light relative z-10 size-6 transition-colors",
            props.isActive && "text-secondary-light dark:text-primary-dark",
          )}
        />
      </button>
      <AnimatePresence>
        {props.isActive && (
          <motion.div
            layoutId="themeButtonBG"
            transition={{ type: "spring", duration: 0.5 }}
            className={twMerge(
              "bg-primary-dark dark:bg-secondary-light absolute top-0.5 left-0.5 size-7 rounded",
            )}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
