import Link from "next/link";
import { Button } from "../ui/button";
import LinkButton from "../ui/linkButton";
import { playfair, raleway } from "@/app/fonts";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const links = ["home", "projects", "education", "skills", "about me"];
  return (
    <div className="w-full flex items-center justify-between py-3 px-5 bg-secondary">
      <div className={`text-2xl ${playfair.className} font-bold`}>
        CodingDestro
      </div>
      {
        <div className={` items-center gap-x-3 hidden md:flex`}>
          {links.map((link: string, idx: number) => (
            <div key={idx}>
              <Button variant={"link"} className="capitalize">
                <Link href={`#${link}`}>{link}</Link>
              </Button>
            </div>
          ))}
        </div>
      }
      <div className="hidden md:block">
        <LinkButton href="/">contact me</LinkButton>
      </div>
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="w-9 h-8 border bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: "url('/hamburger.png')" }}
            ></button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white w-[300px] z-40 rounded-lg border py-5 mt-4 mr-5 min-h-[200px] px-2">
            {links.map((val: string, idx: number) => (
              <DropdownMenuItem
                asChild
                key={idx}
                className="block hover:bg-slate-300 transition-colors bg-slate-100 px-5 py-1 my-2 capitalize rounded-lg"
              >
                <Link href={`#${val}`}>{val}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="text-right">
              <LinkButton href="/">contact me</LinkButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
