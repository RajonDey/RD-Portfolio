import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar, Hero, StarsCanvas } from "./components";
import LoadingSpinner from "./components/LoadingSpinner"; // Make sure you've created this component

// Lazy load components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<LoadingSpinner />}>
                  <About />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Experience />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Tech />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Works />
                </Suspense>
                <Suspense fallback={<LoadingSpinner />}>
                  <Feedbacks />
                </Suspense>
              </>
            }
          />
        </Routes>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
        <footer className="text-black text-center p-2 pt-8">
          <small>© 2024 Rajon. All rights reserved.</small>
        </footer>
      </div>
    </Router>
  );
};

export default App;
