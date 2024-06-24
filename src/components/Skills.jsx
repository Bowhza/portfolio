export default function Skills() {
  return (
    <section>
      <h2
        id="skills"
        className="font-bold text-2xl text-teal-300 pb-5 observe opacity-0 transition-all ease-in-out duration-500"
      >
        Skills
      </h2>

      <div className="flex flex-col gap-5 ">
        <section
          className="observe flex flex-col gap-3 opacity-0 transition-all ease-in-out duration-500 translate-x-0
      bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg hover:bg-opacity-35"
        >
          <h3 className="text-center font-bold text-lg">Web Development</h3>
          <div className="flex justify-around items-center flex-wrap gap-5">
            <SkillCard image={"assets/html.svg"} text="HTML" />
            <SkillCard image={"assets/css.svg"} text="CSS" />
            <SkillCard image={"assets/javascript.svg"} text="JavaScript" />
            <SkillCard image={"assets/react.svg"} text="React.js" />
            <SkillCard image={"assets/tailwind.svg"} text="Tailwind" />
            <SkillCard image={"assets/jquery.svg"} text="jQuery" />
            <SkillCard image={"assets/nodejs.svg"} text="Node.js" />
            <SkillCard image={"assets/vite.svg"} text="Vite" />
            <SkillCard image={"assets/php.svg"} text="PHP" />
            <SkillCard image={"assets/flask.svg"} text="Flask" />
          </div>
        </section>

        <section
          className="observe flex flex-col gap-3 opacity-0 transition-all ease-in-out duration-500 translate-x-0
      bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg hover:bg-opacity-35"
        >
          <h3 className="text-center font-bold text-lg">
            Programming and Databases
          </h3>
          <div className="flex justify-around items-center flex-wrap gap-5 lg:gap-0">
            <SkillCard image={"assets/csharp.svg"} text="C#" />
            <SkillCard image={"assets/python.svg"} text="Python" />
            <SkillCard image={"assets/c.svg"} text="C" />
            <SkillCard image={"assets/mysql.svg"} text="mySQL" />
            <SkillCard image={"assets/sqlite.svg"} text="SQLite" />
            <SkillCard image={"assets/sqlserver.svg"} text="MS SQL" />
          </div>
        </section>

        <section
          className="observe flex flex-col gap-3 opacity-0 transition-all ease-in-out duration-500 translate-x-0
      bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg hover:bg-opacity-35"
        >
          <h3 className="text-center font-bold text-lg flex-wrap gap-5 lg:gap-0">
            Tools & Other
          </h3>
          <div className="flex justify-around items-center flex-wrap gap-5 lg:gap-0 ">
            <SkillCard image={"assets/git.svg"} text="Git" />
            <SkillCard image={"assets/github.svg"} text="GitHub" />
            <SkillCard image={"assets/adobe.svg"} text="Adobe" />
            <SkillCard image={"assets/virtualbox.svg"} text="VirtualBox" />
            <SkillCard image={"assets/vmware.svg"} text="VMWare" />
          </div>
        </section>
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
