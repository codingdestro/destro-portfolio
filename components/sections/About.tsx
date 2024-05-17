import Section from "@/components/template/Section";
import Link from "next/link";

const Logo = ({ img, url }: { img: string; url: string }) => (
  <div>
    <Link
      href={url}
      className="w-9 h-9 cursor-pointer rounded-full bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    ></Link>
  </div>
);
const About = () => {
  return (
    <Section id="about me" className="x" heading="About Me">
      <div className="flex w-full max-w-[1024px] px-5 py-9 items-start justify-between">
        <div className="break-words text-wrap  max-w-[30rem]">
          <h3 className="text-lg font-semibold">Hi, I&apos;m Mohd Anas,</h3>
          <p className="text-sm text-slate-600">
            A dedicated full stack web developer. I specialize in creating
            dynamic, responsive web applications, blending front-end design with
            back-end functionality. Let&apos;s connect and explore the world of
            web development together!
          </p>
          <div className="flex items-center gap-x-4 mt-9">
            <Logo img="/github.png" url="//github.com/codingdestro" />
            <Logo img="/linkedin.png" url="/" />
            <Logo img="/x.png" url="/" />
            <Logo img="/insta.png" url="/" />
            <Logo img="/upwork.png" url="/" />
          </div>
        </div>
        <div>
          <h3 className="text-redish text-xl font-semibold underline underline-offset-4">
            Contact Me
          </h3>
          <div className="">
            <p>+91 9193-19-5759</p>
            <p>www.codingdestro.dev</p>
            <p>codingdestro@gmail.com</p>
            <p>
              youtube.com/<span className="text-sm">@</span>codingdestro
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] border-t-[3px] text-center py-3">
        <p className="">COPYRIGHT © 2024 codingdestro. All Rights Reserved.</p>
      </div>
    </Section>
  );
};

export default About;
