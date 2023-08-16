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
import Logo from "../../../../public/static/images/logo_white.png";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectWrapper>
        <ProjectLink href="#" />
        <ProjectImageWrapperStyle>
          <ProjectImage priority src={Logo} alt="avatar" />
        </ProjectImageWrapperStyle>
        <ProjectInfoWrapperStyle>
          <ProjectInfoSyle>
            <ProjectInfoDescribeStyle>more Project me</ProjectInfoDescribeStyle>
            <ProjectInfoTitleStyle>Who I am ?</ProjectInfoTitleStyle>
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
