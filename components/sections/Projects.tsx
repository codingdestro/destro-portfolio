import { playfair, raleway } from "@/app/fonts";
import List from "./projects/list";
import { Button } from "../ui/button";
import Card from "./projects/Card";
import projectData, { ProjectsType } from "../../data/projects";
import Section from "../template/Section";
import ScrollDiv from "../ui/scrollDiv";

const Projects = () => {
  return (
    <Section heading="My Projects" id="projects" className="_">
      <div className="flex w-full justify-center items-center ">
        <div className="grid md:grid-cols-2 max-w-[800px] items-center h-full gap-5 mt-12 ">
          {projectData.map((project: ProjectsType, idx: number) => (
            <div key={idx}>
              <ScrollDiv
                animation={
                  idx % 2 == 0 ? "animate-fadeInLeft" : "animate-fadeInRight"
                }
              >
                <Card
                  id={idx}
                  title={project.name}
                  desc={project.desc}
                  point={project.points}
                  image={project.pic}
                />
              </ScrollDiv>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
