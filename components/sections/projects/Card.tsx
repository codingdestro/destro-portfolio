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
      className={`border flex ${props.id % 2 !== 0 && "flex-row-reverse"}  h-[18rem] items-center justify-between  rounded-[40px] gap-x-5 shadow-lg w-[880px] overflow-hidden`}
    >
      <div className="flex-1 ">
        <div className="pl-9 flex flex-col">
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
      <div className="flex-1 bg-red-50 h-full">
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${props.image})` }}
        />
      </div>
    </div>
  );
};

export default Card;
