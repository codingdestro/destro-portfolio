import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="#home" className="min-h-screen overflow-hidden ">
      <div className="flex flex-wrap gap-5 translate-y-[20%] items-center justify-evenly ">
        <div className="flex max-w-[370px] flex-col gap-y-5 ">
          <div>
            <h1 className={`font-Georgia-bold text-[6vw]`}>
              HI, <br />
              I&apos;m <span className="text-redish">Mohd Anas</span>
            </h1>
            <p className="text-center">
              A full-stack web developer based in India
            </p>
          </div>
          <div className="flex justify-start">
            <Button className="rounded-full" asChild>
              <Link href={"/myresume.pdf"} download={"mohdanasResume.pdf"}>
                Download CV
              </Link>
            </Button>
          </div>
        </div>

        <div className="">
          <div className=" overflow-hidden rounded-full  h-[300px] md:w-[400px] md:h-[400px]  w-[300px] flex items-center justify-center">
            <Image
              src={"/profile-pic.jpg"}
              alt="profice image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
