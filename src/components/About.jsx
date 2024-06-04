export default function About() {
  return (
    <section
      className="observe flex flex-col gap-3 
     bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg"
    >
      <h2 className="font-bold text-2xl text-teal-400">About Me</h2>
      <p className="text-gray-300">
        Hello! I am Bohdan, a passionate{" "}
        <span className="font-bold">Computer Engineering Technologist</span>{" "}
        with a diverse background in{" "}
        <span className="font-bold">
          embedded systems, web development, and software engineering.
        </span>{" "}
        Proven ability to design and implement innovative solutions using a
        variety of technologies.
      </p>
      <p className="text-gray-300">
        Beyond the tech realm, I am an avid{" "}
        <span className="font-bold">guitarist</span>, I enjoy learning and
        playing songs of my favorite bands. I also enjoy immersing myself in{" "}
        <span className="font-bold">video games</span> where I ofter find
        inspiration. When I am not programming or strumming away, you will find
        me on the pitch <span className="font-bold">playing sports</span> or{" "}
        <span className="font-bold">
          capturing moments through the lens of my camera
        </span>
        , taking in the world around me.
      </p>
    </section>
  );
}
