"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import About from "@/components/sections/projects/About";
import Skills from "@/components/sections/Skills";
import Particle from "@/components/ui/particle";
import ScrollDiv from "@/components/ui/scrollDiv";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <Hero />
      <Projects />
      <Education />
      <Skills />
      <About />
    </div>
  );
}
