export default function Chip(props: { list: string[] }) {
  return (
    <div className="flex gap-1 py-2 flex-wrap">
      {props.list.map((item) => (
        <span className="bg-gray-200 px-2 py-1 rounded-full" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function ProgressChip(props: {
  list: { name: string; proficiency: number }[];
}) {
  return (
    <div className="flex gap-1 py-2 flex-wrap">
      {props.list.map((item) => (
        <div className="bg-gray-200 px-2 py-1 rounded-full" key={item.name}>
          <span className="bg-black">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
