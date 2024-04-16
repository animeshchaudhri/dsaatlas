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
function page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-20">
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
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />
            <ChallengeCard
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />
          </div>
        </section>

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
            />
            <AnotherChallengeCard
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
            <AnotherChallengeCard
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
          </div>
        </section>
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
            />
            <MEDIUM_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />{" "}
            <MEDIUM_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />{" "}
            <MEDIUM_Card
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
          </div>
        </section>
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
            />
            <Easy_Card
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
            <Easy_Card
              challengeType="Challenge 2"
              difficulty="Hard"
              numComments={8}
              numLikes={15}
              timestamp="2 months ago"
            />{" "}
            <Easy_Card
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
        </section>
      </div>
      <Footer />
    </>
  );
}

export default page;
