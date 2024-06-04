import ListCard from "./ListCard";

export default function Projects() {
  const projects = [
    {
      title: "Raspberry Pi Smart Mirror",
      description:
        "Developed a smart mirror that provides real-time information such as the time, weather, reminders, and news. Incorporates a gesture sensor, proximity sensor, ambient light sensor for automatic display adjustment, and accelerometer for tap features. To improve accessibility and user experience, there is a web application for users to control the device and modify settings.",
      image: "assets/MirrorUI.gif",
      skills: [
        "Python",
        "Flask REST API",
        "React.js",
        "Tailwind CSS",
        "SQLite",
        "Node.js",
        "Socket.io",
      ],
      link: "https://github.com/Bowhza/Smart-Mirror",
    },
    {
      title: "Audio Mixer",
      description:
        "Designed an audio mixer using the ATMega328p microcontroller, programmed using Embedded C, with slider potentiometers for easy volume adjustment. Developed an audio driver and desktop application using C# WinForms.",
      image: "assets/Audio-Driver.png",
      skills: ["Embedded C", "Platform-IO", "C#", ".NET Framework", "WinForms"],
      link: "https://github.com/Bowhza/Audio-Mixer",
    },
    {
      title: "Lokit (Password Manager)",
      description:
        "Created a self-hosted password manager with a 2-step decryption system requiring a user-specific decryption key file for extra security. Password hashing and salting are done from scratch using Bcrypt.",
      image: "assets/Lokit.png",
      skills: [
        "Flask",
        "jQuery",
        "Python",
        "BCrypt",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      link: "https://github.com/Bowhza/Lokit",
    },
  ];

  return (
    <section id="projects">
      <h2 className="font-bold text-2xl text-teal-300 pb-5 observe opacity-0 transition-all ease-in-out duration-500">
        Projects
      </h2>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => {
          return <ProjectCard {...project} key={index} />;
        })}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, skills, link }) {
  return (
    <a href={link} target="_blank">
      <div
        className="observe opacity-0 flex flex-col gap-3 transition-all ease-in-out duration-500 translate-x-0
     bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 p-5 shadow-lg hover:bg-opacity-35 group 
     "
      >
        <div>
          <img
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            src={image}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm leading-4 font-semibold text-neutral-400 group-hover:text-neutral-300 transition-all ease-in-out duration-300">
              {description}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {skills.map((item, index) => {
              return <ListCard text={item} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </a>
  );
}
