import React from "react";

interface ChallengeCardProps {
  challengeType: string;
  difficulty: string;
  numComments: number;
  numLikes: number;
  timestamp: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challengeType,
  difficulty,
  numComments,
  numLikes,
  timestamp,
}) => {
  return (
    <a
      className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
      href={`/challenge/${challengeType.toLowerCase()}`}
    >
      <div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-medium group-focus:shadow-medium dark:hover:shadow-medium-dark dark:group-focus:shadow-medium-dark dark:hover:border-difficulty-medium-dark hover:border-difficulty-medium dark:group-focus:border-difficulty-medium-dark group-focus:border-difficulty-medium">
        {/* Difficulty Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] text-black/10 duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] text-black/10 duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        </svg>
        {/* Challenge Title */}
        <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
          <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
            {challengeType}
          </h3>
          {/* Difficulty Level */}
          <div className="flex items-center gap-5 text-center duration-300">
            <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-medium-dark bg-difficulty-medium text-white dark:text-black">
              {difficulty.toUpperCase()}
            </div>
            {/* Number of Comments */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
              </svg>
              {numComments}
            </div>
            {/* Number of Likes */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-thumbs-up"
              >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              {numLikes}
            </div>
          </div>
        </div>
        {/* Challenge Type and Timestamp */}
        <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
          <div className="flex items-center gap-2">
            <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
              @{challengeType} Challenges
            </div>
            <div className="text-muted-foreground whitespace-nowrap text-sm">
              {timestamp}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const AnotherChallengeCard: React.FC<ChallengeCardProps> = ({
  challengeType,
  difficulty,
  numComments,
  numLikes,
  timestamp,
}) => {
  return (
    <a
      className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
      href={`/challenge/${challengeType.toLowerCase()}`}
    >
      <div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-easy group-focus:shadow-easy dark:hover:shadow-easy-dark dark:group-focus:shadow-easy-dark dark:hover:border-difficulty-easy-dark hover:border-difficulty-easy dark:group-focus:border-difficulty-easy-dark group-focus:border-difficulty-easy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-easy dark:group-hover/card:text-difficulty-easy-dark absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] text-black/10 duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10"
        >
          <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-easy dark:group-hover/card:text-difficulty-easy-dark absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] text-black/10 duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10"
        >
          <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
        </svg>
        {/* Challenge Title */}
        <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
          <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
            {challengeType}
          </h3>
          {/* Difficulty Level */}
          <div className="flex items-center gap-5 text-center duration-300">
            <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-hard-dark bg-difficulty-hard text-white dark:text-black">
              {difficulty.toUpperCase()}
            </div>
            {/* Number of Comments */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
              </svg>
              {numComments}
            </div>
            {/* Number of Likes */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-thumbs-up"
              >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              {numLikes}
            </div>
          </div>
        </div>
        {/* Challenge Type and Timestamp */}
        <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
          <div className="flex items-center gap-2">
            <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
              @{challengeType} Challenges
            </div>
            <div className="text-muted-foreground whitespace-nowrap text-sm">
              {timestamp}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const MEDIUM_Card: React.FC<ChallengeCardProps> = ({
  challengeType,
  difficulty,
  numComments,
  numLikes,
  timestamp,
}) => {
  return (
    <a
      className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
      href={`/challenge/${challengeType.toLowerCase()}`}
    >
      <div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-extreme group-focus:shadow-extreme dark:hover:shadow-extreme-dark dark:group-focus:shadow-extreme-dark dark:hover:border-difficulty-extreme-dark hover:border-difficulty-extreme dark:group-focus:border-difficulty-extreme-dark group-focus:border-difficulty-extreme">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-extreme dark:group-hover/card:text-difficulty-extreme-dark absolute -right-4 -top-10 h-24 w-24 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-x-4 group-hover/card:translate-y-10 group-hover/card:-rotate-[125deg] dark:text-white/10"
        >
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-extreme dark:group-hover/card:text-difficulty-extreme-dark absolute -right-14 -top-24 h-48 w-48 origin-top-right -rotate-3 stroke-[0.33] text-black/10 duration-300 group-hover/card:scale-50 dark:text-white/10"
        >
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
        </svg>
        {/* Challenge Title */}
        <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
          <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
            {challengeType}
          </h3>
          <div className="flex items-center gap-5 text-center duration-300">
            <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-extreme-dark bg-difficulty-extreme text-white dark:text-black">
              {difficulty.toUpperCase()}
            </div>
            {/* Number of Comments */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
              </svg>
              {numComments}
            </div>
            {/* Number of Likes */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-thumbs-up"
              >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              {numLikes}
            </div>
          </div>
        </div>
        {/* Challenge Type and Timestamp */}
        <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
          <div className="flex items-center gap-2">
            <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
              @{challengeType} Challenges
            </div>
            <div className="text-muted-foreground whitespace-nowrap text-sm">
              {timestamp}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const Easy_Card: React.FC<ChallengeCardProps> = ({
  challengeType,
  difficulty,
  numComments,
  numLikes,
  timestamp,
}) => {
  return (
    <a
      className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
      href={`/challenge/${challengeType.toLowerCase()}`}
    >
      <div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-beginner group-focus:shadow-beginner dark:hover:shadow-beginner-dark dark:group-focus:shadow-beginner-dark dark:hover:border-difficulty-beginner-dark hover:border-difficulty-beginner dark:group-focus:border-difficulty-beginner-dark group-focus:border-difficulty-beginner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-beginner dark:group-hover/card:text-difficulty-beginner-dark absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-90 dark:text-white/10"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/card:text-difficulty-beginner dark:group-hover/card:text-difficulty-beginner-dark absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] text-black/10 duration-500 group-hover/card:scale-90 dark:text-white/10"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>

        {/* Challenge Title */}
        <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
          <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
            {challengeType}
          </h3>
          <div className="flex items-center gap-5 text-center duration-300">
            <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-beginner-dark bg-difficulty-beginner text-white dark:text-black">
              {difficulty.toUpperCase()}
            </div>
            {/* Number of Comments */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
              </svg>
              {numComments}
            </div>
            {/* Number of Likes */}
            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-thumbs-up"
              >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              {numLikes}
            </div>
          </div>
        </div>
        {/* Challenge Type and Timestamp */}
        <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
          <div className="flex items-center gap-2">
            <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
              @{challengeType} Challenges
            </div>
            <div className="text-muted-foreground whitespace-nowrap text-sm">
              {timestamp}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
