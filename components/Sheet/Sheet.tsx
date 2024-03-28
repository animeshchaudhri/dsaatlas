"use client";
import axios from "axios";
import { useEffect, useState } from "react";
function Sheet() {
  const [sheetdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://leetcode-api-1vp9.onrender.com/easy")
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      {/* <div className="rounded-md border border-gray-700">
        <table
          className="relative w-full max-w-7xl table-auto text-gray-400"
          style={{ tableLayout: "fixed", maxWidth: "80rem", zIndex: 10 }}
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
            <tr className="w-full bg-[#12151D] hover:bg-gray-900">
              <td className="px-2 py-4">
                <span className="ml-2 inline-block">1</span>
              </td>
              <td className="px-2">
                <a
                  className="transition duration-200 hover:text-[#06b6d4]"
                  href="/problems/smallest-difference"
                >
                  Smallest Difference
                </a>
              </td>
              <td className="w-[40%] truncate px-2">
                <a
                  className="transition duration-200 hover:text-[#06b6d4]"
                  href="/problems/smallest-difference"
                >
                  Given two arrays of integers, find the pair of values (one
                  value in each array) with the smallest (non-negative)
                  difference.
                </a>
              </td>
              <td className="px-2 ">
                <span className="inline-block w-20 capitalize rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                  {" "}
                  EASY
                </span>
              </td>
              <td className=" items-center justify-start px-1">
                <a
                  className="mr-1 inline-block rounded-md px-1 py-0.5 capitalize hover:text-[#06b6d4]"
                  href="/tags/arrays"
                >
                  Arrays{" "}
                </a>
                <a
                  className="mr-1 inline-block rounded-md px-1 py-0.5 capitalize hover:text-[#06b6d4]"
                  href="/tags/sorting"
                >
                  sorting{" "}
                </a>
                <a
                  className="mr-1 inline-block rounded-md px-1 py-0.5 capitalize hover:text-[#06b6d4]"
                  href="/tags/two-pointer"
                >
                  Two Pointer{" "}
                </a>
              </td>
              <td className="">
                <a className="flex items-center justify-center" href="">
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
          </tbody>
        </table>
      </div> */}
      {sheetdata.map((item) => (
        <tr key={item._id} className="w-full bg-[#12151D] hover:bg-gray-900">
          <td className="px-2 py-4">
            <span className="ml-2 inline-block">{item.id}</span>
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
            <span className="inline-block w-20 capitalize rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
              {item.difficulty}
            </span>
          </td>
          <td className=" items-center justify-start px-1">
            {item.related_topics.split(",").map((topic) => (
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
              href={item.solution_link}
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
    </>
  );
}

export default Sheet;
