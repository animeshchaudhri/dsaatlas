import React, { useRef } from "react";
import Image from "next/image";
import {
  ChallengeCard,
  AnotherChallengeCard,
  MEDIUM_Card,
  Easy_Card,
} from "./components/Card";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import Badge from "./components/Badge";

function page() {
  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-between  px-4 pt-5 flex-col gap-10">
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
        <Badge tag="EASY" title="EASY" />
        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20"
            id="container"
          >
            <AnotherChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <AnotherChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <AnotherChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <AnotherChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <AnotherChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <AnotherChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
          </div>
        </section>
        <Badge tag="MEDIUM" title="Medium" />

        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20"
            id="container"
          >
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
          </div>
        </section>

        <Badge tag="BEGINNER" title="HARD" />
        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20"
            id="container"
          >
            <Easy_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <Easy_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <Easy_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <Easy_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <Easy_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
          </div>
        </section>

        <Badge tag="EXTREME" title="EXTREME" />
        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20"
            id="container"
          >
            {" "}
            <MEDIUM_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
            <MEDIUM_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />{" "}
            <MEDIUM_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />{" "}
            <MEDIUM_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default page;
