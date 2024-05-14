"use client";

import sheetcall from "../../app/api/sheet";
import { Checkbox } from "@/components/ui/Checkbox";
import { useState, useEffect } from "react";
import SkeletonLoader from "./Loading";
import { Suspense } from "react";
import {clsx} from 'clsx';

export default function Sheet() {
  const [difficulty, setDifficulty] = useState("easy");
  const [sheetData, setSheetData] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // State to hold the input value

  const fetchSheetData = async (difficulty: any) => {
    try {
      const sheetData = await sheetcall(difficulty);
      const jsonData = await sheetData.json();

      setSheetData(jsonData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchSheetData(difficulty);
  }, [difficulty]);
  useEffect(() => {
    fetchSheetData(difficulty);
  }, [difficulty]);
  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value); // Update the state with the new value
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-20 ">
        <div className="mx-auto mt-20 min-h-screen max-w-7xl">
          <div className="flex flex-1 flex-row text-xs">
          <button
              className={clsx("rounded-tl rounded-bl border px-2 py-2 tracking-wider text-white  border-slate-700", {"border-[#06b6d4]" : difficulty=="easy"})}
              onClick={() => {
                setDifficulty("easy");
              }}
            >
              Easy
            </button>
            <button
              className={clsx("border px-2 py-2 tracking-wider text-white border-slate-700", {"border-[#06b6d4]" : difficulty=="medium"})}
              onClick={() => {
                setDifficulty("medium");
              }}
            >
              Medium
            </button>
            <button
              className={clsx("rounded-tr rounded-br border px-2 py-2 tracking-wider text-white border-slate-700", {"border-[#06b6d4]" : difficulty=="hard"})}
              onClick={() => {
                setDifficulty("hard");
              }}
            >
              Hard
            </button>
            <input
              type="text"
              className="ml-4 w-1/3 rounded-[4px] border border-slate-700 bg-transparent px-2 text-white placeholder-gray-700 focus:outline-none"
              placeholder="Search problems"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center mt-10 justify-center">
            <div className="rounded-md border w-[60rem]  border-gray-700">
              <table
                className="relative w-full max-w-7xl table-auto text-gray-400"
                style={{
                  tableLayout: "fixed",
                  maxWidth: "80rem",
                  zIndex: 10,
                }}
              >
                <thead className="bg-transparent">
                  <tr className="w-full text-left">
                    <th className="w-[5%] py-2 px-2">&lt;/&gt;</th>
                    <th className="w-[20%] px-2">Title</th>
                    <th className="w-[35%] px-2">Description</th>
                    <th className="px-2">Difficulty</th>
                    <th className="w-[20%] px-2">Tags</th>
                    <th className="px-2 text-center">Solve</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-700 text-sm">
                  <Suspense fallback={<SkeletonLoader />}>
                    {sheetData.map((item: any) => (
                      <tr
                        key={item._id}
                        className="w-full bg-[#12151D] hover:bg-gray-900"
                      >
                        <td className="px-2 py-4">
                          <span className="ml-2 inline-block">
                            <Checkbox />
                          </span>
                        </td>
                        <td className="px-2">
                          <a
                            className="transition duration-200 hover:text-[#06b6d4]"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </td>
                        <td className="w-[40%] truncate px-2">
                          <a
                            className="transition duration-200 hover:text-[#06b6d4]"
                            href={item.url}
                          >
                            {item.description}
                          </a>
                        </td>
                        <td className="px-2 ">
                          {item.difficulty === "Easy" ? (
                            <span className="inline-block w-20 capitalize rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                              {item.difficulty}
                            </span>
                          ) : item.difficulty === "Hard" ? (
                            <span className="inline-block w-20 capitalize rounded-sm bg-gradient-to-r from-red-700 to-red-500 text-white px-2 py-0.5 text-sm mb-2">
                              {item.difficulty}
                            </span>
                          ) : (
                            <span className="inline-block w-20 capitalize rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                              {item.difficulty}
                            </span>
                          )}
                        </td>
                        <td className=" items-center justify-start px-1">
                          {item.related_topics.split(",").map((topic: any) => (
                            <a
                              key={topic}
                              className="mr-1 inline-block rounded-md px-1 py-0.5 capitalize hover:text-[#06b6d4]"
                              href={`/tags/${topic.trim()}`}
                            >
                              {topic.trim()}
                            </a>
                          ))}
                        </td>
                        <td className="">
                          <a
                            className="flex items-center justify-center"
                            href={item.url}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 rotate-180 transform font-bold text-[#06b6d4]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 16l-4-4m0 0l4-4m-4 4h18"
                              ></path>
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </Suspense>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
