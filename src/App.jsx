import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";

function App() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      document.body.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #1e40af, #172554)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="flex flex-col gap-10 pt-24 lg:w-1/2 lg:py-24 text-neutral-200">
          <About />
          <Education />
        </main>
      </div>
    </div>
  );
}

export default App;
