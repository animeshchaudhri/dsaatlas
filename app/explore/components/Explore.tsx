"use client";
import React from "react";
import {
  ChallengeCard,
  AnotherChallengeCard,
  MEDIUM_Card,
  Easy_Card,
} from "./Card";
import Badge from "./Badge";
import { useEffect, useRef, useState } from "react";
import { companycall } from "@/app/api/sheet";
import SkeletonBox from "./SkeltonBox";

function Explore() {
  const [amazondata, setAmazonData] = useState([]);
  const [microsoftdata, setMicrosoftData] = useState([]);
  const [googledata, setGoogleData] = useState([]);
  const [Uberdata, setUberData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const callamazondata = async () => {
    const data = await companycall("Amazon");
    const response = await data.json();
    setAmazonData(response);
    console.log(response);
  };
  const callmicrosoftdata = async () => {
    const data = await companycall("Microsoft");
    const response = await data.json();
    setMicrosoftData(response);
    console.log(response);
  };
  const callgoogledata = async () => {
    const data = await companycall("Google");
    const response = await data.json();
    setGoogleData(response);
    console.log(response);
  };
  const calluberdata = async () => {
    const data = await companycall("Facebook");
    const response = await data.json();
    setUberData(response);
    console.log(response);
  };

  const challengeCards = amazondata.map((item: any) => (
    <ChallengeCard
      key={item.id} // Adding a key is important for React lists
      challengeType={item.title}
      difficulty={item.difficulty}
      numComments={item.discuss_count}
      numLikes={item.likes}
      timestamp={item.rating}
      description={item.description}
      link={item.url}
    />
  ));
  const anotherChallengeCards = microsoftdata.map((item: any) => (
    <AnotherChallengeCard
      key={item.id} // Adding a key is important for React lists
      challengeType={item.title}
      difficulty={item.difficulty}
      numComments={item.discuss_count}
      numLikes={item.likes}
      timestamp={item.rating}
      description={item.description}
      link={item.url}
    />
  ));
  const mediumCards = googledata.map((item: any) => (
    <MEDIUM_Card
      key={item.id} // Adding a key is important for React lists
      challengeType={item.title}
      difficulty={item.difficulty}
      numComments={item.discuss_count}
      numLikes={item.likes}
      timestamp={item.rating}
      description={item.description}
      link={item.url}
    />
  ));
  const easyCards = Uberdata.map((item: any) => (
    <Easy_Card
      key={item.id} // Adding a key is important for React lists
      challengeType={item.title}
      difficulty={item.difficulty}
      numComments={item.discuss_count}
      numLikes={item.likes}
      timestamp={item.rating}
      description={item.description}
      link={item.url}
    />
  ));
  useEffect(() => {
    callamazondata().then(() => {
    callgoogledata().then(() => {
    callmicrosoftdata().then(() => {
    calluberdata().then(() =>{
      setLoading(false);
    });});})})
  }, []);

  return (
    <>
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
        <Badge tag="EASY" title="Amazon" />
        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20 h-[300px]"
            id="container"
          >
            {isLoading ?
             <SkeletonBox />
             : anotherChallengeCards}
          </div>
        </section>
        <Badge tag="MEDIUM" title="Google" />

        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20 h-[300px]"
            id="container"
          >
            {isLoading ?
             <SkeletonBox />
             : challengeCards}
          </div>
        </section>

        <Badge tag="BEGINNER" title="Uber" />
        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20 h-[300px]"
            id="container"
          >
            {isLoading ?
             <SkeletonBox />
             : easyCards}
          </div>
        </section>

        <Badge tag="EXTREME" title="Microsoft" />
        <section className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem]">
          <div
            className="hide-scrollbar flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll scroll-smooth p-6 px-4 md:px-20 h-[300px]"
            id="container"
          >
            {" "}
            {isLoading ?
             <SkeletonBox />
             : mediumCards}
          </div>
        </section>
      </div>
    </>
  );
}

export default Explore;


