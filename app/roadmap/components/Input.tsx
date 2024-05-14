"use client";
import { stringify } from "querystring";
import Mermaid, { MermaidProps } from "./Mermaid";
import React, { useState, useEffect } from "react";

function Input() {
  const [generatedContent, setGeneratedContent] = useState("");
  const [userInput, setUserInput] = useState("Roadmap");

  const data = `graph LR
  style A fill:#f9f,stroke:#333,stroke-width:4px
  style B, C, D, E, F, G, H fill:#f9f,stroke:#333,stroke-width:2px
  style I, J, K, L, M, N, O, P, Q, R, S, T, U fill:#f9f,stroke:#333,stroke-width:2px
  style B1, B2, B3, C1, C2, C3, D1, D2, E1, E2, E3, F1, F2, G1, G2, G3, G4, G5, G6, H1, H2, H3, H4, H5 fill:#f9f,stroke:#333,stroke-width:2px
  linkStyle default stroke:green;

  A[Start] --> B(Array)
  A --> C(Linked List)
  A --> D(Stack)
  A --> E(Queue)
  A --> F(Hash Table)
  A --> G(Tree)
  A --> H(Graph)
  B --> I(Searching)
  C --> I
  D --> I
  E --> I
  F --> I
  G --> I
  H --> I
  I --> J(Sorting)
  J --> K(Comparison Sort)
  J --> L(Non-comparison Sort)
  K --> M(Bubble Sort)
  K --> N(Selection Sort)
  K --> O(Insertion Sort)
  K --> P(Merge Sort)
  K --> Q(Quick Sort)
  K --> R(Heap Sort)
  L --> S(Counting Sort)
  L --> T(Radix Sort)
  L --> U(Bucket Sort)

  B1[Linear Search] --> B2[Binary Search] --> B3[Ternary Search]
  C1[Singly Linked List] --> C2[Doubly Linked List] --> C3[Circular Linked List]
  D1[Array-based Stack] --> D2[Linked List-based Stack]
  E1[Array-based Queue] --> E2[Linked List-based Queue] --> E3[Circular Queue]
  F1[Chaining] --> F2[Open Addressing]
  G1[Binary Tree] --> G2[Binary Search Tree] --> G3[AVL Tree] --> G4[Red-Black Tree] --> G5[B-Tree] --> G6[Trie]
  H1[Adjacency List] --> H2[Adjacency Matrix] --> H3[Graph Traversal] --> H4[Shortest Path] --> H5[Minimum Spanning Tree]

  H3 --> DFS
  H3 --> BFS
  H4 --> Dijkstra
  H4 --> Bellman-Ford
  H5 --> Prim
  H5 --> Kruskal

  K1[Bubble Sort] --> K2[Selection Sort] --> K3[Insertion Sort] --> K4[Merge Sort] --> K5[Quick Sort] --> K6[Heap Sort]
  L1[Counting Sort] --> L2[Radix Sort] --> L3[Bucket Sort]
`;
  const [mermaidProps, setMermaidProps] = useState({ text: data });
  useEffect(() => {
    const mermaidCode = generatedContent
      .replace("```mermaid", "")
      .replace("```", "");

    console.log(mermaidCode); // Log mermaidCode to the console

    setMermaidProps({ text: mermaidCode });
  }, [generatedContent]);

  const handleClick = async () => {
    try {
      const userInputString = `make mermaid js markdown make sure the syntax is correct only give code as ouptut for title "${userInput}" make it clear and detailed`;

      const res = await fetch("api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: userInputString }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      console.log(data);
      setGeneratedContent(data.text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setUserInput("Roadmap");
  }, []);

  const handleChange = (event: any) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col  items-center gap-4 mt-6">
          <h1 className="text-4xl">Generate your very own Roadmap</h1>
          <div className="flex gap-4">
          <input
            type="text"
            className="w-80 h-10 px-3 rounded-lg border-2 border-purple-500 bg-gray-900 text-purple-500 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="What's on your mind?"
            value={userInput}
            onChange={handleChange} // Add onChange event handler to update userInput state
          />
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            onClick={handleClick} // Add onClick event handler
          >
            Generate
          </button>
          </div>
          {/* <div className="mt-4 text-gray-500">{generatedContent}</div> */}
          {/* <p>{mermaidProps}</p> */}
        </div>

        <Mermaid {...mermaidProps} />
      </div>
    </>
  );
}

export default Input;
