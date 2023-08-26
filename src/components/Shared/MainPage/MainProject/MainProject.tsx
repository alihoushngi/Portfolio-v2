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
} from "./MainProjectStyle";
import diba from "../../../../../public/static/images/Chatroom2.png";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const MainProject = () => {
  return (
    <CardContainer containerStyle="w-1/2 md:ms-2">
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
    </CardContainer>
  );
};

export default MainProject;
