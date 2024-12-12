import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Basic performance logging
if (process.env.NODE_ENV !== "production") {
  const reportPerformance = () => {
    if (window.performance) {
      const t = window.performance.timing;
      console.log(`DNS lookup: ${t.domainLookupEnd - t.domainLookupStart}ms`);
      console.log(`TCP connection: ${t.connectEnd - t.connectStart}ms`);
      console.log(`DOM loading: ${t.domLoading - t.navigationStart}ms`);
      console.log(`DOM interactive: ${t.domInteractive - t.navigationStart}ms`);
      console.log(`DOM complete: ${t.domComplete - t.navigationStart}ms`);
    }
  };

  window.addEventListener("load", reportPerformance);
}
