import { playfair } from "@/app/fonts";
import { Button } from "../ui/button";
import Image from "next/image";
import Particle from "../ui/particle";

const Hero = () => {
  return (
    <section id="#home" className="min-h-section  ">
      <div className="absolute"></div>
      <div className="flex  translate-y-[200px] items-center justify-center gap-x-[12rem]">
        <div className="flex flex-col gap-y-5 ">
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
            <Button className="rounded-full">Download CV</Button>
          </div>
        </div>
        <div>
          <div className="h-[400px]  w-[400px] flex items-center justify-center">
            <img src={"/ellipse.svg"} alt="image bg ovel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
