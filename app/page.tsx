"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Particle from "@/components/ui/particle";
import ScrollDiv from "@/components/ui/scrollDiv";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Services />
      <About />
    </div>
  );
}
