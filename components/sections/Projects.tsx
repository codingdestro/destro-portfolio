import { playfair, raleway } from "@/app/fonts";
import List from "./projects/list";
import { Button } from "../ui/button";
import Card from "./projects/Card";
import projectData, { ProjectsType } from "../../data/projects";
import Section from "../template/Section";

const Projects = () => {
  return (
    <Section heading="My Projects">
      <div className="w-full flex flex-col items-center h-full gap-y-32 mt-12">
        {projectData.map((project: ProjectsType, idx: number) => (
          <div key={idx}>
            <Card
              id={idx + 1}
              title={project.name}
              desc={project.desc}
              point={project.points}
              image={project.pic}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
