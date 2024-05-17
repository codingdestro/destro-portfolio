import { useEffect, useRef, useState } from "react";

interface Props {
  children?: JSX.Element | JSX.Element[] | string;
  animation: string;
  def?: string;
}

const ScrollDiv = ({ children, animation, def }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const rect = divRef.current?.getBoundingClientRect()!;
    const height = window.innerHeight;
    if (rect.top < height && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={divRef}
      className={` ${isVisible ? animation : def || "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default ScrollDiv;
