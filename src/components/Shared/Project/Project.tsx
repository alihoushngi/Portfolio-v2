import React from "react";
import {
  ProjectImage,
  ProjectImageWrapperStyle,
  ProjectInfoButtonStyle,
  ProjectInfoButtonWrapperStyle,
  ProjectInfoDescribeStyle,
  ProjectInfoSyle,
  ProjectInfoTitleStyle,
  ProjectInfoWrapperStyle,
  ProjectLink,
  ProjectWrapper,
} from "./ProjectStyle";
import ProjectContainer from "@/components/Containers/ProjectContainer/ProjectContainer";
import diba from "../../../../public/static/images/Chatroom2.png";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectWrapper>
        <ProjectLink href="/project" />
        <ProjectImageWrapperStyle>
          <ProjectImage priority src={diba} alt="diba" />
        </ProjectImageWrapperStyle>
        <ProjectInfoWrapperStyle>
          <ProjectInfoSyle>
            <ProjectInfoDescribeStyle>SHOWCASE</ProjectInfoDescribeStyle>
            <ProjectInfoTitleStyle>Projects</ProjectInfoTitleStyle>
          </ProjectInfoSyle>
          <ProjectInfoButtonWrapperStyle>
            <ProjectInfoButtonStyle>{"-->"}</ProjectInfoButtonStyle>
          </ProjectInfoButtonWrapperStyle>
        </ProjectInfoWrapperStyle>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
