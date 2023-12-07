"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import ProjectCard from "@/components/Shared/ProjectCard/ProjectCard";
import {
  ProjectListOne,
  ProjectListThree,
  ProjectListTwo,
} from "./ProjectRightSectionWrapperList";

const ProjectRightSectionWrapper = () => {
  return (
    <div className="w-2/3 flex min-h-[1px] relative max-sm:w-full ">
      <div className="relative flex flex-wrap content-start">
        <div className="relative w-full flex flex-wrap content-start py-0 h-fit max-md:p-0 mb-3">
          <h2
            className="text-white text-4xl font-bold uppercase tracking-tighter items-center max-2l:text-4xl text-center w-full aos-init"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            ALL PROJECT
          </h2>
        </div>
        <div className="flex gap-3 max-sm:flex-col max-sm:w-full">
          {ProjectListOne.map((item, index) => {
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
        <div className="flex gap-3 max-sm:flex-col max-sm:w-full">
          {ProjectListTwo.map((item, index) => {
            return (
              <CardContainer
                key={index}
                containerStyle="mb-4"
                cardCustomStyle="flex justify-center"
              >
                <ProjectCard
                  ProjectLinkHref={item.ProjectLink}
                  ProjectImageSrc={item.ProjectImage}
                  ProjectImageAlt={item.ProjectName}
                  ProjectTagline={item.ProjectTagLine}
                  ProjectTitle={item.ProjectName}
                  ProjectWidth={300}
                />
              </CardContainer>
            );
          })}
        </div>
        <div className="flex gap-3 max-sm:flex-col max-sm:w-full">
          {ProjectListThree.map((item, index) => {
            return (
              <CardContainer
                key={index}
                containerStyle="mb-4"
                cardCustomStyle="flex justify-center"
              >
                <ProjectCard
                  ProjectLinkHref={item.ProjectLink}
                  ProjectImageSrc={item.ProjectImage}
                  ProjectImageAlt={item.ProjectName}
                  ProjectTagline={item.ProjectTagLine}
                  ProjectTitle={item.ProjectName}
                  ProjectWidth={300}
                />
              </CardContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectRightSectionWrapper;
