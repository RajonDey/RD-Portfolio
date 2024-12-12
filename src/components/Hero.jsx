import React, {
  memo,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

// Lazy load the ComputersCanvas component
const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const ScrollIndicator = memo(() => (
  <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>
));

const SkeletonUI = () => (
  <div className="w-full h-[500px] bg-gray-200 animate-pulse rounded-lg"></div>
);

const LazyComputersCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="w-full h-[600px] mt-0">
      {isVisible ? (
        <Suspense fallback={<SkeletonUI />}>
          <ComputersCanvas />
        </Suspense>
      ) : (
        <SkeletonUI />
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-black section-title`}>
            Hi, I'm <span className="text-[#218193]">Rajon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-black-700`}>
            I turn ideas into digital excellence – by crafting pixel-perfect
            <br className="sm:block hidden" />
            websites, seamless user interfaces, and powerful web applications.
          </p>
        </div>

        <LazyComputersCanvas />
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default memo(Hero);
