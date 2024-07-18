"use client";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <About />
    </div>
  );
}
