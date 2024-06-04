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
    <section
      className="observe flex flex-col gap-3 
     bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-5 shadow-lg"
    >
      <h2 className="font-bold text-2xl text-teal-400">Education</h2>
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
          {courseWork.map((item) => {
            return <ListCard text={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}
