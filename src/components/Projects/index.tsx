import React from "react";
import ProjectCard from "../ProjectCard";
import * as S from "./index.styles";
import projects from "../../data/projects";

export interface ProjectPropsType {
  refArray: React.RefObject<HTMLDivElement>[]
}

const Projects = ({ refArray }: ProjectPropsType) => {
  return (
    <div>
      <h1>Projects</h1>
      <S.ProjectList>
        {projects.map((project, index) => (
          <div style={{ width: "80%" }} key={index} ref={refArray[index]}>
            <ProjectCard {...project} direction='left'/>
          </div>
        ))}
      </S.ProjectList>
    </div>
  )
};

export default Projects;
