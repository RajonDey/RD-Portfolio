import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, StarsCanvas } from "./components";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
        <small className="text-black absolute inset-x-0 bottom-0 p-2 pt-8 text-center">
          © 2024 Rajon. All rights reserved.
        </small>
      </div>
    </BrowserRouter>
  );
};

export default App;
