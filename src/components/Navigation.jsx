import { useState } from "react";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-3 my-5 font-semibold text-neutral-200 drop-shadow-lg">
        <li className="text-lg nav-link">
          <a href="#about">About</a>
        </li>
        <li className="text-lg nav-link">
          <a href="#education">Education</a>
        </li>
        <li className="text-lg nav-link">
          <a href="#skills">Skills</a>
        </li>
        <li className="text-lg nav-link">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
