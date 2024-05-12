"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { use } from "react";

export default function Home() {
  return (
    <div className="flex gap-5 p-5 items-center border m-5 rounded-lg">
      <div>hello world</div>
      <Button onClick={() => alert("hellow")}>click here</Button>
    </div>
  );
}
