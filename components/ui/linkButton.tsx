import { Button } from "./button";
import Link from "next/link";

interface Props {
  href: string;
  children: string;
}

const LinkButton = ({ href, children }: Props) => {
  return (
    <Button asChild variant={"outline"} className="bg-[#fc345c] text-white">
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default LinkButton;
