"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import ProjectCard from "@/components/Shared/ProjectCard/ProjectCard";
import { ProjectList } from "./ProjectLeftSectionWrapperList";

const ProjectLeftSectionWrapper = () => {
  return (
    <div className="w-1/3 flex min-h-[1px] relative max-sm:w-full">
      <div className="relative flex-wrap content-start max-sm:w-full">
        {ProjectList.map((item, index) => {
          return (
            <CardContainer
              key={index}
              containerStyle="mb-4"
              cardCustomStyle="flex justify-center"
            >
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
