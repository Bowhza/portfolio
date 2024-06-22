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
    const ids = ["about", "education", "skills", "projects"];
    const navList = document.getElementById("nav-list").children;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (ids.includes(entry.target.id) && entry.isIntersecting) {
            const intersectingLink = document.getElementById(
              `${entry.target.id}-nav`
            );
            for (let i = 0; i < navList.length; i++) {
              navList[i].classList.remove(
                "lg:text-xl",
                "lg:text-teal-300",
                "lg:pl-2"
              );
            }
            intersectingLink.classList.add(
              "lg:text-xl",
              "lg:text-teal-300",
              "lg:pl-2"
            );
          }

          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-30", "translate-x-[200px]");
            entry.target.classList.add("opacity-100", "translate-x-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-x-0");
            entry.target.classList.add("opacity-30", "translate-x-[200px]");
          }
        });
      },
      {
        threshold: 0.3,
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
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main className="flex flex-col gap-10 pt-10 lg:w-1/2 lg:py-24 text-neutral-200 lg:overflow-visible overflow-hidden">
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
