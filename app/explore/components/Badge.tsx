import React from "react";

function Badge() {
  return (
    <div className="container text-center">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Explore
      </h1>
      <p className="mx-auto max-w-[69ch] text-lg leading-10 text-neutral-600 dark:text-white/50">
        Explore the challenges. Embrace the opportunity to grow, learn, and
        showcase your programming abilities. We hope you find the{" "}
        <span className="font-semibold dark:text-neutral-200">perfect</span>{" "}
        challenge!
      </p>
    </div>
  );
}

export default Badge;
