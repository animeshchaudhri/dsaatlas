"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar/Navbar";
import ChallengeCard from "@/components/75DaysHard/ChallengeCard";
import sheetcall from "@/app/api/sheet";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Problem {
  _id: string;
  id: string;
  title: string;
  description: string;
  is_premium: string;
  difficulty: string;
  solution_link: string;
  acceptance_rate: string;
  frequency: string;
  url: string;
  discuss_count: string;
  accepted: string;
  submissions: string;
  companies: string;
  related_topics: string;
  likes: string;
  dislikes: string;
  rating: string;
  asked_by_faang: string;
  similar_questions: string;
}

function ThePage() {
  const [questions, setQuestions] = useState<Problem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const emojis = [
    "💼",
    "💻",
    "🖥️",
    "📱",
    "⌨️",
    "🖱️",
    "🖨️",
    "📠",
    "📞",
    "📧",
    "📝",
    "📋",
    "📅",
    "📊",
    "📈",
    "📉",
    "📚",
    "📖",
    "🔍",
    "🔎",
    "📌",
    "📍",
    "📎",
    "🖇️",
    "📏",
    "📐",
    "📋",
    "✏️",
    "📝",
    "📜",
    "📄",
    "📃",
    "📑",
    "💾",
    "💽",
    "📀",
    "🖥️",
    "💻",
    "🖨️",
    "📠",
    "🎞️",
    "📽️",
    "🎥",
    "📹",
    "📷",
    "📸",
    "🔍",
    "🔎",
    "📡",
    "📡",
    "📡",
    "📱",
    "☎️",
    "📞",
    "📟",
    "📠",
    "📺",
    "📻",
    "🎙️",
    "🎚️",
    "🎛️",
    "📡",
    "🔋",
    "🔌",
    "💡",
    "🔦",
    "🕯️",
    "💼",
    "📁",
    "👅",
    "📰",
    "🦄",
    "🗄️",
    "🍌",
    "📇",
    "🗃️",
    "📋",
    "📑",
    "🔖",
    "🏷️",
  ];
  useEffect(() => {
    const fetchData = async (difficulty: string) => {
      const response = await sheetcall(difficulty);
      const data = await response.json();
      setQuestions(data.slice(0, 75));
      setIsLoading(false);
    };

    fetchData("easy");
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 pb-8 md:gap-10 md:py-5">
        <div className="container">
          <div className="relative mx-auto w-fit text-center">
            <div className="absolute left-0 top-0 -z-10 hidden h-full w-full transform-gpu bg-gradient-to-r from-red-500 via-red-600 to-green-500 opacity-70 blur-3xl dark:block sm:opacity-40" />
            <h1 className="mb-10 mt-16 text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-8xl">
              <span>75</span> Days <span className="text-red-600">HARD</span> 💪
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 pb-8 md:gap-10 md:py-5 flex-wrap container">
        {isLoading
          ? Array.from({ length: 75 }, (_, index) => (
              <SkeletonTheme
                key={index} // Add key prop with unique value
                baseColor="#334154"
                highlightColor="#06b6d4"
                borderRadius="0.5rem"
                duration={4}
              >
                <SkeletonBox />
              </SkeletonTheme>
            ))
          : questions.map((question, index) => (
              <ChallengeCard
                key={question.id} // Add key prop with unique value
                challengeUrl={question.url}
                emoji={emojis[index]}
                dayNo={index + 1}
              />
            ))}
      </div>
    </>
  );
}

function SkeletonBox() {
  return (
    <SkeletonTheme baseColor="#444" highlightColor="#aaa">
      <div className="inter-var">
        <div className="bg-gray-50 flex flex-col gap-7 sm:gap-0 items-center justify-around group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[15rem] h-[20rem] sm:h-[20rem] rounded-xl p-6 border">
          <div className="flex justify-between items-center">
            <Skeleton width={100} height={40} />
          </div>
          <div className="flex justify-center items-center flex-1">
            <div className="text-9xl">
              <Skeleton circle width={120} height={120} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default ThePage;
