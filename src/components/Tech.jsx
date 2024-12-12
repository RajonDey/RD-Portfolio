import React, { memo, lazy, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Lazy load the BoxCanvas component
const BoxCanvas = lazy(() => import("./canvas/Box"));

// Skeleton loader for BoxCanvas
const BoxSkeleton = () => (
  <div className="w-28 h-28 bg-gray-200 rounded-md animate-pulse"></div>
);

const TechItem = memo(({ technology }) => (
  <div className="w-28 h-28 m-2">
    <Suspense fallback={<BoxSkeleton />}>
      <BoxCanvas icon={technology.icon} />
    </Suspense>
  </div>
));

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
      {technologies.map((technology) => (
        <TechItem key={technology.name} technology={technology} />
      ))}
    </div>
  );
};

export default memo(SectionWrapper(Tech, ""));
