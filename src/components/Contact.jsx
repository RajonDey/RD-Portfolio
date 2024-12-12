import React, { memo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const ContactItem = memo(({ title, content, href }) => (
  <div className="flex flex-col">
    <span className="text-white font-medium mb-4">{title}</span>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary text-[16px] font-medium"
      >
        {content}
      </a>
    ) : (
      <p className="text-secondary text-[16px] font-medium">{content}</p>
    )}
  </div>
));

const Contact = () => {
  const contactItems = [
    {
      title: "Email",
      content: "rajondeyofficial@gmail.com",
      href: "mailto:rajondeyofficial@gmail.com",
    },
    {
      title: "WhatsApp",
      content: "Chat on WhatsApp",
      href: "https://wa.me/8801737997143",
    },
    { title: "Location", content: "Sylhet, Bangladesh" },
  ];

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
          {contactItems.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
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

export default memo(SectionWrapper(Contact, "contact"));
