import { playfair } from "@/app/fonts";
import { Button } from "../ui/button";
import Image from "next/image";
import Particle from "../ui/particle";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="#home" className="min-h-section overflow-hidden ">
      <div className="absolute">
        <Particle />
      </div>
      <div className="flex flex-wrap gap-5 translate-y-[20%] items-center justify-evenly ">
        <div className="flex max-w-[370px] flex-col gap-y-5 ">
          <div>
            <h1 className={`${playfair.className} text-[56px]`}>
              HI, <br />
              I&apos;m <span className="text-redish font-bold">Mohd Anas</span>
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

        <div>
          <div className="h-[300px] md:w-[400px] md:h-[400px]  w-[300px] flex items-center justify-center">
            <img src={"/ellipse.svg"} alt="image bg ovel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
