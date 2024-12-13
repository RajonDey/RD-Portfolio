import React, { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt"; // Import Tilt directly

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = memo(
  ({ index, name, description, tags, image, source_code_link }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  }
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-black font-black md:text-[40px] sm:text-[40px] xs:text-[30px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]"
        >
          As a Software Developer with over five years of experience, I've had
          the privilege of contributing to numerous impactful projects, spanning
          across website development, email template creation, and web
          application design. My journey in this dynamic field has been both
          challenging and rewarding, and I'm excited to share a few highlights
          from my portfolio
          <br />
          <br />
          My Open-source projects{" "}
          <a
            href="https://github.com/RajonDey"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub.
          </a>
          <br />
          My pens on{" "}
          <a
            href="https://codepen.io/Rajon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Codepen.
          </a>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default memo(SectionWrapper(Works, ""));
