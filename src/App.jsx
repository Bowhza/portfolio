import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const { scrollHeight, scrollWidth } = document.documentElement;
      const { scrollX, scrollY } = window;

      const xPercent = ((clientX + scrollX) / scrollWidth) * 100;
      const yPercent = ((clientY + scrollY) / scrollHeight) * 100;

      document.body.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #1e40af, #172554)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-24");
            entry.target.classList.add("opacity-100", "translate-x-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-x-0");
            entry.target.classList.add("opacity-0", "translate-x-24");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    const elementsToObserve = document.querySelectorAll(".observe");
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="flex flex-col gap-10 pt-24 lg:w-1/2 lg:py-24 text-neutral-200 ">
          <About />
          <Education />
          <Skills />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
