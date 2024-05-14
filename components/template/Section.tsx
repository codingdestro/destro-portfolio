import { playfair } from "@/app/fonts";

interface Props {
  heading: string;
  children: JSX.Element | JSX.Element[];
}
const Section = ({ heading, children }: Props) => {
  return (
    <div className="min-h-lvh">
      <div className="p-5 flex flex-col items-center">
        {/* Heading*/}
        <div className="text-center  border-b-2 w-[16rem]">
          <h1 className={`text-[36px] font-semibold ${playfair.className}`}>
            {heading.split(" ")[0]}{" "}
            <span className={`text-redish`}>{heading.split(" ")[1]}</span>
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
