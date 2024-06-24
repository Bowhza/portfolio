export default function Navigation() {
  return (
    <nav>
      <ul
        id="nav-list"
        className="flex flex-col gap-3 my-5 font-semibold text-neutral-200 drop-shadow-lg "
      >
        <li
          id="about-nav"
          className="text-lg nav-link hover:text-xl hover:text-teal-300 hover:pl-2 transition-all duration-300 ease-in-out"
        >
          <a href="#about">About</a>
        </li>
        <li
          id="education-nav"
          className="text-lg nav-link hover:text-xl hover:text-teal-300 hover:pl-2 transition-all duration-300 ease-in-out"
        >
          <a href="#education">Education</a>
        </li>
        <li
          id="skills-nav"
          className="text-lg nav-link hover:text-xl hover:text-teal-300 hover:pl-2 transition-all duration-300 ease-in-out"
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          id="projects-nav"
          className="text-lg nav-link hover:text-xl hover:text-teal-300 hover:pl-2 transition-all duration-300 ease-in-out"
        >
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
