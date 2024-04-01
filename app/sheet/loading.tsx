import React from "react";

const SkeletonLoader = () => {
  return (
    <tr className="w-full bg-[#12151D]">
      <td className="px-2 py-4">
        <span className="ml-2 inline-block">
          {/* Placeholder for Checkbox */}
          <div className="h-4 w-4 bg-gray-300 rounded animate-pulse"></div>
        </span>
      </td>
      <td className="px-2">
        <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="w-[40%] truncate px-2">
        <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="px-2">
        <div className="h-6 w-20 bg-gray-300 rounded animate-pulse"></div>
      </td>
      <td className="items-center justify-start px-1">
        <div className="flex space-x-1">
          {/* Placeholder for related topics */}
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </td>
      <td className="">
        <div className="flex items-center justify-center">
          {/* Placeholder for SVG */}
          <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </td>
    </tr>
  );
};

export default SkeletonLoader;
