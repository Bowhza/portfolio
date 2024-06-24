import ListCard from "./ListCard";

export default function Projects() {
  const projects = [
    {
      title: "Raspberry Pi Smart Mirror",
      description:
        "Created a smart mirror displaying real-time time, weather, reminders, and news. Features gesture and proximity sensors, ambient light adjustment, and tap control via accelerometer. Includes a web app for user control and settings adjustment.",
      image: "assets/MirrorUI.gif",
      skills: [
        "Python",
        "Flask REST API",
        "React.js",
        "Tailwind CSS",
        "SQLite",
        "Node.js",
        "Socket.io",
        "Raspberry Pi",
      ],
      link: "https://github.com/Bowhza/Smart-Mirror",
    },
    {
      title: "Soccer Match Predictor",
      description:
        "Developed a match predictor for the EURO 2024 tournament using the XGBoost classifier machine learning model to predict match outcomes. The model was trained using historical data from previous international matches. Matplotlib was used to visualize the feature engineered data.",
      image: "assets/EURO2024.png",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "XGBoost",
        "Matplotlib",
        "Jupyter Notebook",
        "Python",
      ],
      link: "https://github.com/Bowhza/euro2024-predictor",
    },
    {
      title: "Audio Mixer",
      description:
        "Designed an audio mixer using the ATMega328p microcontroller, programmed using Embedded C, with slider potentiometers for easy volume adjustment. Developed an audio driver and desktop application using C# WinForms.",
      image: "assets/Audio-Driver.png",
      skills: [
        "Embedded C",
        "Platform-IO",
        "C#",
        ".NET Framework",
        "WinForms",
        "Arduino Nano",
      ],
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
    <section>
      <h2
        id="projects"
        className="font-bold text-2xl text-teal-300 pb-5 observe opacity-0 transition-all ease-in-out duration-500"
      >
        Projects
      </h2>
      <div className="flex flex-col gap-5 group/list">
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
     bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 p-5 shadow-lg hover:bg-opacity-35 group/list lg:hover:!opacity-100 lg:group-hover/list:opacity-50
     "
      >
        <div className="md:grid md:grid-cols-2 lg:grid-cols-[3fr_4fr] sm:flex sm:flex-col gap-3">
          <div>
            <img
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src={image}
            />
          </div>
          <div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm leading-4 font-semibold text-neutral-400 group-hover:text-neutral-300 transition-all ease-in-out duration-300">
              {description}
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <ul className="flex flex-wrap gap-2 ">
            {skills.map((item, index) => {
              return <ListCard text={item} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </a>
  );
}
