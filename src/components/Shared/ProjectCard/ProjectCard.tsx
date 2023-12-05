import { StaticImageData } from "next/image";
import React from "react";
import {
  ProjectImageStyle,
  ProjectTaglineStyle,
  ProjectTitleStyle,
  ProjectWrapperStyle,
} from "./ProjectCardStyle";

interface IProjectCardProps {
  ProjectLinkHref: string;
  ProjectImageSrc: StaticImageData;
  ProjectImageAlt: string;
  ProjectTagline: string;
  ProjectTitle: string;
  ProjectWidth: number;
}

const ProjectCard = ({
  ProjectLinkHref,
  ProjectImageSrc,
  ProjectImageAlt,
  ProjectTagline,
  ProjectTitle,
  ProjectWidth,
}: IProjectCardProps) => {
  return (
    <ProjectWrapperStyle href={ProjectLinkHref}>
      <ProjectImageStyle
        src={ProjectImageSrc}
        alt={ProjectImageAlt}
        width={ProjectWidth}
      />
      <ProjectTaglineStyle>{ProjectTagline}</ProjectTaglineStyle>
      <ProjectTitleStyle>{ProjectTitle}</ProjectTitleStyle>
    </ProjectWrapperStyle>
  );
};

export default ProjectCard;
