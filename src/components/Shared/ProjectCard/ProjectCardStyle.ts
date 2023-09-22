import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const ProjectWrapperStyle = styled(Link)``;

export const ProjectImageStyle = styled(Image)`
  border-radius: 1.5rem;
  margin-bottom: 13px;
`;

export const ProjectTaglineStyle = styled.span`
  color: #bcbcbc;
  opacity: 0.5;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

export const ProjectTitleStyle = styled.h3`
  font-size: 22px;
  color: #ffffff;
  opacity: 0.9;
  font-weight: 500;
  margin: 0;
`;
