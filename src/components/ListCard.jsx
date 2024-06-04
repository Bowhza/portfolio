export default function ListCard({ text }) {
  return (
    <li className="select-none rounded-full bg-teal-400/10 px-3 py-1 text-md font-semibold leading-5 text-teal-300 ">
      {text}
    </li>
  );
}
