import { StaticImageData } from "next/image";

export interface IProjectCardProps {
  ProjectLinkHref: string;
  ProjectImageSrc: StaticImageData;
  ProjectImageAlt: string;
  ProjectTagline: string;
  ProjectTitle: string;
  ProjectWidth: number;
}
