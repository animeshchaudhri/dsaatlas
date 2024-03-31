"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

const Titable = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }
  });

  const renderWords = (text: any, classname: string) => {
    return (
      <motion.div>
        <motion.span className={`opacity-0 ${classname}`}>{text}</motion.span>
      </motion.div>
    );
  };
  return (
    <div ref={scope}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          type: "easeIn",
          duration: 2,
        }}
      >
        <div className="stats stats-vertical lg:stats-horizontal max-md:hidden overflow-hidden shadow">
          <div className="stat place-items-center">
            <div className="stat-title">{renderWords("Downloads", " ")}</div>
            <div className="stat-value"> {renderWords("31k", "")}</div>
            <div className="stat-desc">
              {renderWords("From January 1st to February 1st", "")}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">{renderWords("Users", "")}</div>
            <div className="stat-value text-purple-500 ">
              {renderWords("4,200", "text-purple-500")}
            </div>
            <div className="stat-desc">{renderWords(" ↗︎ 40 (2%)", "")}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">{renderWords("New Registers", "")}</div>
            <div className="stat-value">{renderWords("1,200", "")}</div>
            <div className="stat-desc">{renderWords(" ↘︎ 90 (14%)", "")}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Titable;
