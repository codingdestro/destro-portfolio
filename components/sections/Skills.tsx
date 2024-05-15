import { playfair } from "@/app/fonts";
import Section from "../template/Section";
import { skills } from "@/data/skills";

const SkillSet = ({ tags }: { tags: string[] }) =>
  tags.map((tag: string, idx: number) => (
    <p key={idx} className="text-sm p-2  bg-slate-100 rounded-lg capitalize">
      {tag}
    </p>
  ));

const Skills = () => {
  return (
    <Section heading="My Skills" className="x" id="skills">
      <div className="max-w-[1024px] p-5 flex flex-col gap-5">
        {skills.map((skill: any, idx: number) => (
          <div
            key={idx}
            className={`border rounded-lg p-5 shadow-md ${idx % 2 !== 0 && "text-right"}`}
          >
            <h3
              className={`capitalize ${playfair.className}  text-2xl font-semibold underline`}
            >
              {skill.name}
            </h3>
            <div
              className={` flex ${idx % 2 !== 0 && "justify-end"} flex-wrap gap-2 px-2 py-5`}
            >
              <SkillSet tags={skill.tags} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
