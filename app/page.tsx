"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
