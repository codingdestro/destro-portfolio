import { Button } from "@/components/ui/button";
import List from "./list";
import { raleway } from "@/app/fonts";
const items = [
  "Created in React.js and Node.js",
  "Home, cart and order pages",
  "user auth",
];

interface Props {
  id: number;
  title: string;
  desc: string;
  point: string[];
  image: string;
}
const Card = (props: Props) => {
  return (
    <div
      className={`border flex flex-col p-5 items-center justify-between  rounded-[40px] gap-y-5 shadow-lg w-[360px] overflow-hidden`}
    >
      <div className="w-full flex items-center justify-center px-5">
        <div
          className="w-[300px] h-[200px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${props.image})` }}
        />
      </div>
      <div className=" border-t pt-5 border-t-slate-400 w-full">
        <div className="flex flex-col">
          <h1
            className={`${raleway.className} text-2xl capitalize font-semibold`}
          >
            {props.title}
          </h1>
          <p>{props.desc}</p>
          <List items={props.point} />
          <Button variant={"outline"} className="self-end mr-3">
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
