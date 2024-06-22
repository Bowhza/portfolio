import ListCard from "./ListCard";

export default function Education() {
  const courseWork = [
    "Data Structures and Algorithms",
    "Databases",
    "Web Development",
    "Electronics Design and Analysis",
    "Embedded System Design and Programming",
    "PLC Programming",
    "Wireless Networking and Communications",
    "Software Development Lifecycle",
  ];

  return (
    <section>
      <h2 className="font-bold text-2xl text-teal-300 pb-5 observe opacity-0 transition-all ease-in-out duration-500">
        Education
      </h2>
      <section
        id="education"
        className="observe opacity-0 flex flex-col gap-3 transition-all ease-in-out duration-500 translate-x-0
      bg-slate-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg hover:bg-opacity-35"
      >
        <div className="leading-5">
          <h3 className="font-semibold text-lg">
            Northern Alberta Institute of Technology
          </h3>
          <p>Computer Engineering Technology</p>
          <p>Sep 2022 - April 2024</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Relevant Coursework</h3>
          <ul className="flex flex-wrap gap-2 pt-2">
            {courseWork.map((item, key) => {
              return <ListCard text={item} key={key} />;
            })}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Academic Achievements</h3>
          <p>Achieved Dean’s list every semester with an overall GPA of 3.9.</p>
        </div>
      </section>
    </section>
  );
}
