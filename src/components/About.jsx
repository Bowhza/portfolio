export default function About() {
  return (
    <section
      id="about"
      className="observe opacity-0 flex flex-col gap-3 transition-all ease-in-out duration-500 translate-x-0
     bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg hover:bg-opacity-35"
    >
      <h2 className="font-bold text-2xl text-teal-300">About Me</h2>
      <p className="text-gray-300">
        Hello! I am Bohdan, a passionate{" "}
        <span className="font-bold text-teal-300">
          Computer Engineering Technologist
        </span>{" "}
        with a diverse background in{" "}
        <span className="font-bold text-teal-300">
          embedded systems, web development, and software engineering.
        </span>{" "}
        Proven ability to design and implement innovative solutions using a
        variety of technologies.
      </p>
      <p className="text-gray-300">
        Beyond the tech realm, I am an avid{" "}
        <span className="font-bold text-teal-300">guitarist</span>, I enjoy
        learning and playing songs of my favorite bands. I also enjoy immersing
        myself in <span className="font-bold text-teal-300">video games</span>{" "}
        where I often find inspiration. When I am not programming or strumming
        away, you will find me{" "}
        <span className="font-bold text-teal-300">playing sports</span> or{" "}
        <span className="font-bold text-teal-300">
          capturing moments through the lens of my camera
        </span>
        , taking in the world around me.
      </p>
    </section>
  );
}
