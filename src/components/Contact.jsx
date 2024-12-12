import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#218193] p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-white`}>
          If you have any projects in mind!
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <a
              href="mailto:rajondeyofficial@gmail.com"
              className="text-secondary text-[16px] font-medium"
            >
              rajondeyofficial@gmail.com
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">WhatsApp</span>
            <a
              href="https://wa.me/8801737997143"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-[16px] font-medium"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">Location</span>
            <p className="text-secondary text-[16px] font-medium">
              Sylhet, Bangladesh
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
