import React from "react";
import { ReactComponent } from "@/types/types";
import { IProjectCardProps } from "./ProjectCardTypes";
import Link from "next/link";
import Image from "next/image";

const ProjectCard: ReactComponent<IProjectCardProps> = (props) => {
  const {
    ProjectLinkHref,
    ProjectImageSrc,
    ProjectImageAlt,
    ProjectTagline,
    ProjectTitle,
    ProjectWidth,
    ProjectAriaLabel,
  } = props;

  return (
    <Link
      target="_blank"
      href={ProjectLinkHref}
      className="z-50"
      aria-label={ProjectAriaLabel}
    >
      <Image
        src={ProjectImageSrc}
        alt={ProjectImageAlt}
        width={ProjectWidth}
        className="rounded-lg mb-3"
      />
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[#bcbcbc] opacity-50 text-[10px] uppercase mb-1">
            {ProjectTagline}
          </span>
          <h2 className="text-lg text-white opacity-90 font-medium m-0">
            {ProjectTitle}
          </h2>
        </div>
        <div>
          <span className="transition-all duration-500 hover:text-xl hover:text-white">
            {"-->"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
