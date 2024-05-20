"use client";

import sheetcall, {
  addUserQuestions,
  companycall,
  getUserQuestions,
} from "../../app/api/sheet";
import { Checkbox } from "@/components/ui/Checkbox";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { clsx } from "clsx";
import { auth } from "@clerk/nextjs";

interface Question {
  _id: string;
  title: string;
  description: string;
  difficulty: string;
  related_topics: string;
}

export default function Sheet(user_id: any) {
  const [difficulty, setDifficulty] = useState("Easy");
  const [isLoading, setLoading] = useState(true);

  const [searchValue, setSearchValue] = useState(""); // State to hold the input value
  const [company, setCompany] = useState("");
  const [checked, setChecked] = useState(false);
  // const [userQuestions, setUserQuestions] = useState<Question[]>([]);
  const [sheetData, setSheetData] = useState<Question[]>([]);

  const fetchSheetData = async (difficulty: any) => {
    try {
      const sheetData = await sheetcall(difficulty);
      const jsonData = await sheetData.json();

      setSheetData(jsonData );

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // const fetchUserQuestions = async (): Promise<void> => {
  //   try {
  //     console.log(user_id.user_id);
  //     const response = await getUserQuestions(user_id.user_id!); // Fetch user's questions
  //     const userQuestionsData = await response.json();
  //     setUserQuestions(userQuestionsData as Question[]);
  //     console.log(userQuestionsData);
  //   } catch (error) {
  //     console.error("Failed to fetch user's questions:", error);
  //   }
  // };

  useEffect(() => {
    if (company === "") {
      fetchSheetData(difficulty);
    } else {
      setLoading(false);
    }
  }, [difficulty, company]);

  // useEffect(() => {
  //   // Fetch user's questions when the component mounts
  //   fetchUserQuestions();
  // }, []);
  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value); // Update the state with the new value
  };

  // const handleCheckboxChange = async (
  //   questionId: string,
  //   event: any
  // ): Promise<void> => {
  //   const isChecked = event.target.getAttribute("aria-checked");
  //   console.log(isChecked);
  //   try {
  //     if (isChecked) {
  //       const questionToAdd = sheetData.find(
  //         (question) => question._id === questionId
  //       );
  //       if (questionToAdd) {
  //         setUserQuestions([...userQuestions, questionToAdd]);
  //         await addUserQuestions(user_id.user_id!, [
  //           ...userQuestions.map((question: any) => question._id),
  //           questionId,
  //         ]);
  //         console.log(userQuestions);
  //         // Remove the question from the user's list
  //       } else {
  //         // Add the question to the user's list
  //         const filteredQuestions = userQuestions.filter(
  //           (question: any) => question._id !== questionId
  //         );
  //         setUserQuestions(filteredQuestions);
  //         const data = await addUserQuestions(
  //           user_id.user_id!,
  //           filteredQuestions.map((question: any) => question._id)
  //         );
  //         console.log(data);
  //         // console.log(userQuestions);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Failed to update user's questions:", error);
  //   }
  // };

  const getDatabycompany = async (company: any) => {
    try {
      const sheetData = await companycall(company);
      const jsonData = await sheetData.json();
      console.log(jsonData);
      setSheetData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleChange = (event: any) => {
    setCompany(event.target.value);
    setLoading(true);
    getDatabycompany(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-20 ">
        <div className="mx-auto mt-20 min-h-screen max-w-7xl">
          <div className="flex flex-1 flex-row text-xs">
            <button
              className={clsx(
                "rounded-tl rounded-bl border px-2 py-2 tracking-wider text-white",
                {
                  "border-[#06b6d4]": difficulty == "Easy",
                  "border-slate-700": difficulty != "Easy",
                }
              )}
              onClick={() => {
                setLoading(true);
                setDifficulty("Easy");
              }}
            >
              Easy
            </button>
            <button
              className={clsx("border px-2 py-2 tracking-wider text-white", {
                "border-[#06b6d4]": difficulty == "Medium",
                "border-slate-700": difficulty != "Medium",
              })}
              onClick={() => {
                setLoading(true);
                setDifficulty("Medium");
              }}
            >
              Medium
            </button>
            <button
              className={clsx(
                "rounded-tr rounded-br border px-2 py-2 tracking-wider text-white",
                {
                  "border-[#06b6d4]": difficulty == "Hard",
                  "border-slate-700": difficulty != "Hard",
                }
              )}
              onClick={() => {
                setLoading(true);
                setDifficulty("Hard");
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

            <select
              className="rounded-tr rounded-br border px-2 py-2 tracking-wider ml-96 text-white bg-transparent"
              value={company}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a company
              </option>

              <option value="Google">Google</option>
              <option value="Amazon">Amazon</option>
              <option value="Apple">Apple</option>
              <option value="Adobe">Adobe</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Bloomberg">Bloomberg</option>
              <option value="Facebook">Facebook</option>
              <option value="Oracle">Oracle</option>
              <option value="Uber">Uber</option>
              <option value="Expedia">Expedia</option>
              <option value="Twitter">Twitter</option>
              <option value="Nagarro">Nagarro</option>
              <option value="Sap">SAP</option>
              <option value="Yahoo">Yahoo</option>
              <option value="Cisco">Cisco</option>
              <option value="Qualcomm">Qualcomm</option>
              <option value="GOLDMAN_SACHS">Goldman Sachs</option>
              <option value="YANDEX">Yandex</option>
              <option value="SERVICENOW">ServiceNow</option>
            </select>
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
                  {isLoading ? (
                    <SkeletonTheme
                      baseColor="#334154"
                      highlightColor="#06b6d4"
                      borderRadius="0.5rem"
                      duration={4}
                    >
                      {[...Array(20)].map((e, i) => (
                        <tr
                          key={i}
                          className="w-full bg-[#12151D] hover:bg-gray-900"
                        >
                          <td className="px-7 py-2">
                            <Skeleton />
                          </td>
                          <td className="px-7 py-2">
                            <Skeleton />
                          </td>
                          <td className="px-7 py-2">
                            <Skeleton />
                          </td>
                          <td className="px-7 py-2">
                            <Skeleton />
                          </td>
                          <td className="px-7 py-2">
                            <Skeleton />
                          </td>
                          <td className="px-7 py-2">
                            <Skeleton />
                          </td>
                        </tr>
                      ))}
                    </SkeletonTheme>
                  ) : (
                    sheetData
                      .filter(
                        (i: any) =>
                          (i.title.includes(searchValue) ||
                            i.description.includes(searchValue)) &&
                          i.difficulty === difficulty
                      )
                      .map((item: any) => (
                        <tr
                          key={item._id}
                          className="w-full bg-[#12151D] hover:bg-gray-900"
                        >
                          <td className="px-2 py-4">
                            <span className="ml-2 inline-block">
                              <Checkbox
                                // key={item._id}
                                // checked={userQuestions.some(
                                //   (question: any) => question._id === item._id
                                // )}
                              
                                // onClick={(event: any) =>
                                //   handleCheckboxChange(item._id, event)
                                // }
                              />
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
                            {item.related_topics
                              .split(",")
                              .map((topic: any) => (
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
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SkeltonBox() {
  return (
    <SkeletonTheme
      baseColor="#334154"
      highlightColor="#06b6d4"
      borderRadius="0.5rem"
      duration={4}
    >
      <div className="flex gap-12 h-[300] w-full">
        <Skeleton width={333} height={238} />
        <Skeleton width={333} height={238} />
      </div>
    </SkeletonTheme>
  );
}
