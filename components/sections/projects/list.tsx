import { raleway } from "@/app/fonts";

interface Props {
  items: string[];
}

const List = ({ items }: Props) => {
  return (
    <div className="pl-5 mt-3">
      {items.map((item: string, idx: number) => (
        <div
          key={idx}
          className={`flex items-center gap-2 text-sm ${raleway.className}`}
        >
          <div className="rounded-full w-1 h-1 bg-black" />
          <p className="capitalize">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
