import Section from "@/components/template/Section";
import Link from "next/link";
const contactInfo = [
  {
    link: "+91 9193-19-5759",
    img: "/call.png",
  },
  {
    link: "www.codingdestro.dev",
    img: "/globe.png",
  },

  {
    link: "codingdestro@gmail.com",
    img: "/mail.png",
  },
  {
    link: "youtube.com/@codingdestro",
    img: "/youtube.png",
  },
];

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
      <div className="flex flex-wrap w-full max-w-[800px] px-2 py-9 gap-5 items-start justify-between">
        <div className="break-words text-wrap  max-w-[30rem]">
          <h3 className="text-lg font-semibold">Hi, I&apos;m Mohd Anas,</h3>
          <p className="text-sm text-slate-600">
            A dedicated full stack web developer. I specialize in creating
            dynamic, responsive web applications, blending front-end design with
            back-end functionality. Let&apos;s connect and explore the world of
            web development together!
          </p>
        </div>
        <div>
          <h3 className="text-redish text-xl font-semibold underline underline-offset-4">
            Contact Me
          </h3>
          <div className="text-sm mt-5 flex flex-col gap-y-3">
            {contactInfo.map(
              (val: { link: string; img: string }, idx: number) => (
                <div key={idx} className="flex gap-x-2 items-center">
                  <span
                    className="w-4 h-4 bg-contain bg-center "
                    style={{ backgroundImage: `url('${val.img}')` }}
                  ></span>
                  <p>{val.link}</p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex items-center justify-center flex-1  gap-x-4 mt-9">
          <Logo img="/github.png" url="//github.com/codingdestro" />
          <Logo
            img="/linkedin.png"
            url="//www.linkedin.com/in/mohd-anas-608225255/"
          />
          <Logo img="/x.png" url="//x.com/codingdestro" />
          <Logo img="/insta.png" url="//www.instagram.com/anas_bin_naazir/" />
          <Logo
            img="/upwork.png"
            url="//www.upwork.com/freelancers/~01bfc0d6207a18e651"
          />
        </div>
      </div>
      <div className="w-[90%] border-t-[3px] text-center py-3">
        <p className="">COPYRIGHT © 2024 codingdestro. All Rights Reserved.</p>
      </div>
    </Section>
  );
};

export default About;
