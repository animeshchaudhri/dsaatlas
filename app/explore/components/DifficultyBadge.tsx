import { Badge } from "./Badge";
import { ClassValue, clsx } from "clsx";
import { Diff } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Difficulty = String;
interface Props {
  difficulty: Difficulty;
  className?: string;
}

const COLORS_BY_DIFFICULTY = {
  BEGINNER: "dark:bg-difficulty-beginner-dark bg-difficulty-beginner",
  EASY: "dark:bg-difficulty-easy-dark bg-difficulty-easy",
  MEDIUM: "dark:bg-difficulty-medium-dark bg-difficulty-medium",
  HARD: "dark:bg-difficulty-hard-dark bg-difficulty-hard",
  EXTREME: "dark:bg-difficulty-extreme-dark bg-difficulty-extreme",
  // this will never actually be used
  EVENT: "dark:bg-difficulty-extreme-dark bg-difficulty-extreme",
};

export function DifficultyBadge({ className, difficulty }: Props) {
    return (
        <Badge
            className={cn(
                `duration-300 ${COLORS_BY_DIFFICULTY[difficulty as keyof typeof COLORS_BY_DIFFICULTY]} text-white dark:text-black`,
                className
            )}
        >
            {difficulty}
        </Badge>
    );
}
