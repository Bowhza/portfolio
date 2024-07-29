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
    <header className="text-neutral-200 sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl transition ease-in-out delay-150 font-bold select-none drop-shadow-lg">
          {text}
          {<span className="blink-animation">|</span>}
        </h1>
        <h2 className="font-semibold drop-shadow-lg">
          Computer Engineering Technologist
        </h2>
        <div className="flex items-center font-semibold">
          <img
            className="h-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nN2UT2oCMRSH5xItbrW70r0KbU9hVy56l+odyugBCl0WXPQKIuodZtvidHQjhflK4KkhpGPexELxB1m9l+/LH5IkOfsAl8AQWAAbGXNgYGqx8Aeg4PeYWi8GXnI8pVoix1K1cjdfwIVGYM7czQpIZeSe+pNGsPTAm1a95ZHMNYK1M/nZ02N2YqfQCNzVpZ6esbtLjWDmOaKWVb/yLGIae8k5MJIRfck3gW9gF9N7HSwQyft++vFMVHARtBUvuasWiOQ1QPBSCy6CBvBZAf8wPbUFInmsEPSj4JZk4oG/nQRu/a6ZBc9Uv2dIgA6wBb6B25PCk4PkHrj7E/i/zQ9nGP2XJHVD4gAAAABJRU5ErkJggg=="
          ></img>
          <h3>Edmonton, AB</h3>
        </div>
      </div>
      <Navigation />
      <div>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/bohdanbohnat/" target="_blank">
            <img
              className="size-12 grayscale hover:grayscale-0 transition-color ease-in-out duration-500 hover:animate-pulse hover:scale-110"
              src="assets/linkedin.svg"
            />
          </a>
          <a href="https://github.com/Bowhza" target="_blank">
            <img
              className="size-12 hover:invert transition-color ease-in-out duration-500 hover:animate-pulse hover:scale-110"
              src="assets/github.svg"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
