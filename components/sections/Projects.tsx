import { playfair, raleway } from "@/app/fonts";
import List from "./projects/list";
import { Button } from "../ui/button";
import Card from "./projects/Card";
import projectData, { ProjectsType } from "../../data/projects";

const Projects = () => {
  return (
    <div className="min-h-section">
      <div className="p-5 flex flex-col items-center">
        {/* Heading*/}
        <div className="text-center  border-b-2 w-[16rem]">
          <h1 className={`text-[36px] font-semibold ${playfair.className}`}>
            My <span className={`text-redish`}>Projects</span>
          </h1>
        </div>
        {/* projects cards*/}
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
      </div>
    </div>
  );
};

export default Projects;
