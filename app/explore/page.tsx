"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  ChallengeCard,
  AnotherChallengeCard,
  MEDIUM_Card,
  Easy_Card,
} from "./components/Card";
function page() {
  return (
    <div>
      <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
        <div
          className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20"
          id="container"
        >
          {/* <a
            className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
            href="/challenge/default-generic-arguments"
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
              <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
                <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
                  Default Generic Arguments
                </h3>
                <div className="flex items-center gap-5 text-center duration-300">
                  <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-beginner-dark bg-difficulty-beginner text-white dark:text-black">
                    BEGINNER
                  </div>
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
                    3
                  </div>
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
                    50
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
                <div className="text-sm flex items-center justify-between duration-300">
                  <div className="flex items-center space-x-1 duration-300">
                    <div className="relative flex-shrink-0 w-8 h-8 duration-300">
                      <Image
                        className="rounded-full duration-300"
                        src="https://randomuser.me/api/portraits/women/41.jpg"
                        alt="Profile Picture"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="flex flex-col text-gray-600 duration-300">
                      <span className="duration-300">Jessica White</span>
                      <span className="text-xs duration-300">Mar 28</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
            href="/challenge/default-generic-arguments"
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
              <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
                <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
                  Default Generic Arguments
                </h3>
                <div className="flex items-center gap-5 text-center duration-300">
                  <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-beginner-dark bg-difficulty-beginner text-white dark:text-black">
                    BEGINNER
                  </div>
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
                    3
                  </div>
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
                    50
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
                <div className="text-sm flex items-center justify-between duration-300">
                  <div className="flex items-center space-x-1 duration-300">
                    <div className="relative flex-shrink-0 w-8 h-8 duration-300">
                      <Image
                        className="rounded-full duration-300"
                        src="https://randomuser.me/api/portraits/women/41.jpg"
                        alt="Profile Picture"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="flex flex-col text-gray-600 duration-300">
                      <span className="duration-300">Jessica White</span>
                      <span className="text-xs duration-300">Mar 28</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
            href="/challenge/default-generic-arguments"
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
              <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
                <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
                  Default Generic Arguments
                </h3>
                <div className="flex items-center gap-5 text-center duration-300">
                  <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-beginner-dark bg-difficulty-beginner text-white dark:text-black">
                    BEGINNER
                  </div>
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
                    3
                  </div>
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
                    50
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
                <div className="text-sm flex items-center justify-between duration-300">
                  <div className="flex items-center space-x-1 duration-300">
                    <div className="relative flex-shrink-0 w-8 h-8 duration-300">
                      <Image
                        className="rounded-full duration-300"
                        src="https://randomuser.me/api/portraits/women/41.jpg"
                        alt="Profile Picture"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="flex flex-col text-gray-600 duration-300">
                      <span className="duration-300">Jessica White</span>
                      <span className="text-xs duration-300">Mar 28</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
            href="/challenge/default-generic-arguments"
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
              <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
                <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
                  Default Generic Arguments
                </h3>
                <div className="flex items-center gap-5 text-center duration-300">
                  <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-beginner-dark bg-difficulty-beginner text-white dark:text-black">
                    BEGINNER
                  </div>
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
                    3
                  </div>
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
                    50
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
                <div className="text-sm flex items-center justify-between duration-300">
                  <div className="flex items-center space-x-1 duration-300">
                    <div className="relative flex-shrink-0 w-8 h-8 duration-300">
                      <Image
                        className="rounded-full duration-300"
                        src="https://randomuser.me/api/portraits/women/41.jpg"
                        alt="Profile Picture"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="flex flex-col text-gray-600 duration-300">
                      <span className="duration-300">Jessica White</span>
                      <span className="text-xs duration-300">Mar 28</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a> */}

          {/* Add more cards here */}
        </div>
        {/* Scroll buttons */}
      </section>
      {/* <a
        className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
        href="/challenge/absolute"
      >
        <div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-medium group-focus:shadow-medium dark:hover:shadow-medium-dark dark:group-focus:shadow-medium-dark dark:hover:border-difficulty-medium-dark hover:border-difficulty-medium dark:group-focus:border-difficulty-medium-dark group-focus:border-difficulty-medium">
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
          <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
            <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
              Absolute
            </h3>
            <div className="flex items-center gap-5 text-center duration-300">
              <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-medium-dark bg-difficulty-medium text-white dark:text-black">
                MEDIUM
              </div>
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
                0
              </div>
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
                7
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
            <div className="flex items-center gap-2">
              <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
                @Type Challenges
              </div>
              <div className="text-muted-foreground whitespace-nowrap text-sm">
                3 months ago
              </div>
            </div>
            <div className="text-muted-foreground text-sm relative h-20 pb-4 leading-[1.425rem]">
              <div className="pointer-events-none absolute inset-0 h-full w-full shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] duration-300 group-hover/card:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))] group-focus:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))]"></div>
              <p className="mb-4 overflow-hidden text-ellipsis">
                Implement the{" "}
                <code className="rounded-md border border-zinc-300 bg-neutral-200 px-1 py-[0.10rem] font-mono text-zinc-600 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                  Absolute
                </code>{" "}
                type. A type that take string, number or bigint. The output
                should be a p
              </p>
            </div>
          </div>
        </div>
      </a> */}
      {/*   <a>
        className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
        href="/challenge/assign"
      >
        <div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-hard group-focus:shadow-hard dark:hover:shadow-hard-dark dark:group-focus:shadow-hard-dark dark:hover:border-difficulty-hard-dark hover:border-difficulty-hard dark:group-focus:border-difficulty-hard-dark group-focus:border-difficulty-hard">
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
            className="group-hover/card:text-difficulty-hard dark:group-hover/card:text-difficulty-hard-dark absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-0 dark:text-white/10"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
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
            className="group-hover/card:text-difficulty-hard dark:group-hover/card:text-difficulty-hard-dark absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
            <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
              Assign
            </h3>
            <div className="flex items-center gap-5 text-center duration-300">
              <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-hard-dark bg-difficulty-hard text-white dark:text-black">
                HARD
              </div>
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
                0
              </div>
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
                1
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
            <div className="flex items-center gap-2">
              <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
                @Type Challenges
              </div>
              <div className="text-muted-foreground whitespace-nowrap text-sm">
                3 months ago
              </div>
            </div>
            <div className="text-muted-foreground text-sm relative h-20 pb-4 leading-[1.425rem]">
              <div className="pointer-events-none absolute inset-0 h-full w-full shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] duration-300 group-hover/card:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))] group-focus:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))]"></div>
              <p className="mb-4 overflow-hidden text-ellipsis">
                You have a target object and a source array of objects. You need
                to copy property from source to t
              </p>
            </div>
          </div>
        </div>
      </a>

     
      <a
        className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
        href="/challenge/assert-array-index"
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
          <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
            <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
              Assert Array Index
            </h3>
            <div className="flex items-center gap-5 text-center duration-300">
              <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-extreme-dark bg-difficulty-extreme text-white dark:text-black">
                EXTREME
              </div>
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
                0
              </div>
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
                2
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
            <div className="flex items-center gap-2">
              <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
                @Type Challenges
              </div>
              <div className="text-muted-foreground whitespace-nowrap text-sm">
                3 months ago
              </div>
            </div>
            <div className="text-muted-foreground text-sm relative h-20 pb-4 leading-[1.425rem]">
              <div className="pointer-events-none absolute inset-0 h-full w-full shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] duration-300 group-hover/card:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))] group-focus:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))]"></div>
              <p className="mb-4 overflow-hidden text-ellipsis">
                Sometimes we want to use the good old{" "}
                <code className="rounded-md border border-zinc-300 bg-neutral-200 px-1 py-[0.10rem] font-mono text-zinc-600 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                  for
                </code>
                -loop with an index to traverse the array, but in this
              </p>
            </div>
          </div>
        </div>
      </a> */}
      {/* <a
        className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
        href="/challenge/assert-array-index"
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
          <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
            <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
              Assert Array Index
            </h3>
            <div className="flex items-center gap-5 text-center duration-300">
              <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-extreme-dark bg-difficulty-extreme text-white dark:text-black">
                EXTREME
              </div>
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
                0
              </div>
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
                2
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
            <div className="flex items-center gap-2">
              <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
                @Type Challenges
              </div>
              <div className="text-muted-foreground whitespace-nowrap text-sm">
                3 months ago
              </div>
            </div>
            <div className="text-muted-foreground text-sm relative h-20 pb-4 leading-[1.425rem]">
              <div className="pointer-events-none absolute inset-0 h-full w-full shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] duration-300 group-hover/card:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))] group-focus:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))]"></div>
              <p className="mb-4 overflow-hidden text-ellipsis">
                Sometimes we want to use the good old{" "}
                <code className="rounded-md border border-zinc-300 bg-neutral-200 px-1 py-[0.10rem] font-mono text-zinc-600 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                  for
                </code>
                -loop with an index to traverse the array, but in this
              </p>
            </div>
          </div>
        </div>
      </a> */}
      {/* <a
        className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
        href="/challenge/default-generic-arguments"
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
          <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
            <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
              Default Generic Arguments
            </h3>
            <div className="flex items-center gap-5 text-center duration-300">
              <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-beginner-dark bg-difficulty-beginner text-white dark:text-black">
                BEGINNER
              </div>
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
                3
              </div>
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
                50
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
            <div className="text-sm flex items-center justify-between duration-300">
              <div className="flex items-center space-x-1 duration-300">
                <div className="relative flex-shrink-0 w-8 h-8 duration-300">
                  <Image
                    className="rounded-full duration-300"
                    src="https://randomuser.me/api/portraits/women/41.jpg"
                    alt="Profile Picture"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="flex flex-col text-gray-600 duration-300">
                  <span className="duration-300">Jessica White</span>
                  <span className="text-xs duration-300">Mar 28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a> */}

      <ChallengeCard
        challengeType="Challenge 2"
        difficulty="Hard"
        numComments={8}
        numLikes={15}
        timestamp="2 months ago"
      />
      <AnotherChallengeCard
        challengeType="Challenge 2"
        difficulty="Hard"
        numComments={8}
        numLikes={15}
        timestamp="2 months ago"
      />
      <MEDIUM_Card
        challengeType="Challenge 2"
        difficulty="Hard"
        numComments={8}
        numLikes={15}
        timestamp="2 months ago"
      />
      <Easy_Card
        challengeType="Challenge 2"
        difficulty="Hard"
        numComments={8}
        numLikes={15}
        timestamp="2 months ago"
      />
    </div>
  );
}

export default page;
