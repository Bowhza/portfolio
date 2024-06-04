import { useEffect, useState } from "react";
import "./Header.css";
import Navigation from "./Navigation";

export default function Header() {
  const [text, setText] = useState("");
  const fullText = "Bohdan Bohnat";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-neutral-200 text-4xl transition ease-in-out delay-150 font-bold select-none drop-shadow-lg">
          {text}
          {<span className="blink-animation">|</span>}
        </h1>
        <h2 className="text-neutral-200 font-semibold drop-shadow-lg">
          Computer Engineering Technologist
        </h2>
      </div>
      <Navigation />
      <div>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/bohdanbohnat/" target="_blank">
            <img
              className="size-12 grayscale hover:grayscale-0 transition-color ease-in-out duration-500 hover:animate-pulse hover:scale-110"
              src="src/assets/linkedin.svg"
            />
          </a>
          <a href="https://github.com/Bowhza" target="_blank">
            <img
              className="size-12 hover:invert transition-color ease-in-out duration-500 hover:animate-pulse hover:scale-110"
              src="src/assets/github.svg"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
