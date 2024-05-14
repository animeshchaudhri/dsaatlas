import React from "react";
import Mermaid, { MermaidProps } from "./components/Mermaid";
import Navbar from "@/components/ui/Navbar/Navbar";
import Input from "./components/Input";

const list = [
  `graph LR
subgraph "Start"
    A["Introduction to Algorithms and Data Structures"] --> B["Arrays"]
end
subgraph "Basic Data Structures"
    B --> C["Linked Lists"]
    C --> D["Stacks"]
    D --> E["Queues"]
    E --> F["Trees"]
end
subgraph "Advanced Data Structures"
    F --> G["Graphs"]
    G --> H["Hash Tables"]
    H --> I["Heaps"]
end
subgraph "Algorithms"
    I --> J["Searching Algorithms"]
    J --> K["Sorting Algorithms"]
    K --> L["Recursion"]
    L --> M["Dynamic Programming"]
    M --> N["Greedy Algorithms"]
end
subgraph "Advanced Topics"
    N --> O["Graph Algorithms (BFS, DFS)"]
    O --> P["String Algorithms"]
    P --> Q["Bit Manipulation"]
end
Q --> R["Practice & Projects"]
R --> S((Finish))`,
];

function Page() {
  const mermaidProps: MermaidProps = {
    text: list[0],
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center align-centre">
        <Input />
        {/* <Mermaid {...mermaidProps} /> */}
      </div>
    </div>
  );
}

export default Page;
