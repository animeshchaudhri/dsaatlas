import React from "react";
import ViewMoreButton, { BUTTON_BY_TAGS } from "./Button";

const TITLES_BY_TAG: Record<string, string> = {
  POPULAR: "",
  NEWEST: "",
  BEGINNER:
    "bg-clip-text text-transparent select-none bg-gradient-to-r from-sky-500 to-sky-500 dark:from-sky-500 dark:to-sky-200",
  EASY: "bg-clip-text text-transparent select-none bg-gradient-to-r from-green-600 to-green-500 dark:from-green-300 dark:to-green-100",
  MEDIUM:
    "bg-clip-text text-transparent select-none bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-300 dark:to-yellow-100",
  HARD: "bg-clip-text text-transparent select-none bg-gradient-to-r from-red-600 to-red-500 dark:from-red-300 dark:to-red-100",
  EXTREME:
    "bg-clip-text text-transparent select-none bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-100",
  // this will never actually be used
  EVENT:
    "bg-clip-text text-transparent select-none bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-100",
};

const COLORS_BY_TAG: Record<string, string> = {
  POPULAR: "dark:bg-pink-300 bg-pink-600/50",
  NEWEST: "dark:bg-orange-300 bg-orange-500/50",
  BEGINNER: "dark:bg-sky-300 bg-sky-600/50",
  EASY: "dark:bg-green-300 bg-green-600/50",
  MEDIUM: "dark:bg-yellow-300 bg-yellow-600/50",
  HARD: "dark:bg-red-300 bg-red-600/50",
  EXTREME: "dark:bg-purple-300 bg-purple-600/50",
  // this will never actually be used
  EVENT: "dark:bg-purple-300 bg-purple-600/50",
};

interface BadgeProps {
  tag: keyof typeof BUTTON_BY_TAGS; // Change type to keyof typeof BUTTON_BY_TAGS
  title: string;
}

const Badge: React.FC<BadgeProps> = ({ tag, title }) => {
  const containerClassName = `container flex items-center justify-between gap-3 px-4 pt-5`;
  const titleClassName = `relative text-3xl font-bold tracking-tight ${TITLES_BY_TAG[tag]}`;
  // Assuming this should be a static title

  return (
    <div className={containerClassName}>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <h2 className={titleClassName}>
          <div
            className={`absolute -left-8 -z-10 h-12 w-32 rounded-full bg-pink-300/50 blur-3xl ${COLORS_BY_TAG[tag]}`}
          />
          {title}
        </h2>
      </div>
      <ViewMoreButton redirectRoute="/sheet" tag={tag} />
    </div>
  );
};

export default Badge;
