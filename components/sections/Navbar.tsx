import Link from "next/link";
import { Button } from "../ui/button";
import LinkButton from "../ui/linkButton";
import { playfair, raleway } from "@/app/fonts";

const Navbar = () => {
  const links = ["home", "projects", "education", "skills", "about me"];
  return (
    <div className="w-full flex items-center justify-between py-3 px-5 bg-secondary">
      <div className={`text-2xl ${playfair.className} font-bold`}>
        CodingDestro
      </div>
      <div className={`flex items-center gap-x-3`}>
        {links.map((link: string, idx: number) => (
          <div key={idx}>
            <Button variant={"link"} className="capitalize">
              <Link href={`#${link}`}>{link}</Link>
            </Button>
          </div>
        ))}
      </div>
      <div>
        <LinkButton href="/">contact me</LinkButton>
      </div>
    </div>
  );
};

export default Navbar;
