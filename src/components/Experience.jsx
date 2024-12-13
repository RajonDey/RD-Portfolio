import React, { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyVerticalTimeline = lazy(() =>
  import("react-vertical-timeline-component").then((module) => ({
    default: module.VerticalTimeline,
  }))
);

const LazyVerticalTimelineElement = lazy(() =>
  import("react-vertical-timeline-component").then((module) => ({
    default: module.VerticalTimelineElement,
  }))
);

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = memo(({ experience }) => {
  return (
    <LazyVerticalTimelineElement
      contentStyle={{
        background: "#ECEFF0",
        color: "#000000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </LazyVerticalTimelineElement>
  );
});

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-black font-black md:text-[40px] sm:text-[40px] xs:text-[30px] text-[30px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <Suspense fallback={<div>Loading timeline...</div>}>
          <LazyVerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </LazyVerticalTimeline>
        </Suspense>
      </div>
    </>
  );
};

export default memo(SectionWrapper(Experience, "work"));
