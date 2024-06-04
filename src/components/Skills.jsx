export default function Skills() {
  return (
    <section
      id="skills"
      className="observe flex flex-col gap-3 opacity-0 transition-all ease-in-out duration-500 translate-x-0
     bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg hover:bg-opacity-35"
    >
      <h2 className="font-bold text-2xl text-teal-300">Skills</h2>
      <h3 className="text-center font-bold text-lg">Web Development</h3>
      <div className="flex flex-col lg:gap-5 gap-3">
        <div className="flex justify-around items-center flex-wrap gap-5 lg:gap-0">
          <SkillCard image={"src/assets/html.svg"} text="HTML" />
          <SkillCard image={"src/assets/css.svg"} text="CSS" />
          <SkillCard image={"src/assets/javascript.svg"} text="JavaScript" />
          <SkillCard image={"src/assets/react.svg"} text="React.js" />
          <SkillCard image={"src/assets/tailwind.svg"} text="Tailwind" />
        </div>
        <div className="flex justify-around items-center flex-wrap gap-5 lg:gap-0">
          <SkillCard image={"src/assets/jquery.svg"} text="jQuery" />
          <SkillCard image={"src/assets/nodejs.svg"} text="Node.js" />
          <SkillCard image={"src/assets/vite.svg"} text="Vite" />
          <SkillCard image={"src/assets/php.svg"} text="PHP" />
          <SkillCard image={"src/assets/flask.svg"} text="Flask" />
        </div>
        <h3 className="text-center font-bold text-lg">
          Programming and Databases
        </h3>
        <div className="flex justify-around items-center flex-wrap gap-5 lg:gap-0">
          <SkillCard image={"src/assets/csharp.svg"} text="C#" />
          <SkillCard image={"src/assets/python.svg"} text="Python" />
          <SkillCard image={"src/assets/c.svg"} text="C" />
          <SkillCard image={"src/assets/mysql.svg"} text="mySQL" />
          <SkillCard image={"src/assets/sqlite.svg"} text="SQLite" />
          <SkillCard image={"src/assets/sqlserver.svg"} text="MS SQL" />
        </div>
        <h3 className="text-center font-bold text-lg flex-wrap gap-5 lg:gap-0">
          Tools & Other
        </h3>
        <div className="flex justify-around items-center flex-wrap gap-5 lg:gap-0 ">
          <SkillCard image={"src/assets/git.svg"} text="Git" />
          <SkillCard image={"src/assets/github.svg"} text="GitHub" />
          <SkillCard image={"src/assets/adobe.svg"} text="Adobe" />
          <SkillCard image={"src/assets/virtualbox.svg"} text="VirtualBox" />
          <SkillCard image={"src/assets/vmware.svg"} text="VMWare" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ image, text }) {
  return (
    <div className="flex flex-col group items-center mw-8">
      <img
        className="size-16 lg:size-12 transition ease-in-out duration-300 hover:scale-110 hover:animate-pulse"
        src={image}
      ></img>
      <p className="font-bold transition ease-in-out duration-300 text-center group-hover:text-teal-300">
        {text}
      </p>
    </div>
  );
}
