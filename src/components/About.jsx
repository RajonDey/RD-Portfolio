import React, { memo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = memo(({ index, title, icon, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] drop-shadow-2xl"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-16 h-16 object-contain"
            loading="lazy"
          />

          <h3 className="text-black text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
));

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>At a Glance.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        <p className="mb-3">
          As a software developer, I gain a range of experience in TypeScript
          and JavaScript, with a particular focus on React, NextJs, Node.js, and
          Three.js frameworks. My ability to rapidly acquire new skills, coupled
          with my commitment to collaborative problem-solving, allows me to
          create efficient, scalable, and user-friendly software solutions that
          address real-world challenges.
        </p>
        <p className="mb-3">
          In addition to my technical skills, I have a passion for creating
          websites using both Headless CMS and popular platforms such as
          WordPress, Wix, Squarespace, and Shopify. My goal is to transform your
          ideas into reality, crafting digital experiences that are not only
          functional but also engaging and easy to navigate.
        </p>
        <p>Let's collaborate to bring your vision to life!</p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default memo(SectionWrapper(About, "about"));
