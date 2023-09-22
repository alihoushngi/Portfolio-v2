"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import ProjectCard from "@/components/Shared/ProjectCard/ProjectCard";
import AbzarCheck from "../../../../../public/static/images/AbzarCheck.jpg";
import Diba from "../../../../../public/static/images/Diba.jpg";

const ProjectList = [
  {
    ProjectName: "Abzar Check",
    ProjectLink: "/project",
    ProjectTagLine: "Wordpress",
    ProjectImage: AbzarCheck,
  },
  {
    ProjectName: "Diba",
    ProjectLink: "/project",
    ProjectTagLine: "Wordpress",
    ProjectImage: Diba,
  },
];

const ProjectLeftSectionWrapper = () => {
  return (
    <div className="w-1/3 flex min-h-[1px] relative">
      <div className="relative flex-wrap content-start">
        {ProjectList.map((item, index) => {
          return (
            <CardContainer key={index} containerStyle="mb-4">
              <ProjectCard
                ProjectWidth={300}
                ProjectLinkHref={item.ProjectLink}
                ProjectImageSrc={item.ProjectImage}
                ProjectImageAlt={item.ProjectName}
                ProjectTagline={item.ProjectTagLine}
                ProjectTitle={item.ProjectName}
              />
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectLeftSectionWrapper;
