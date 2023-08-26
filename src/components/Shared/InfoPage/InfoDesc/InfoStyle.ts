import Image from "next/image";
import { styled } from "styled-components";

export const InfoTitleStyle = styled.h2`
  color: #ffffff;
  font-size: 34px;
  font-weight: 500;

  @media (max-width: 1090px) {
    font-size: 29px;
    line-height: 1.2;
  }
`;

export const InfoDescStyle = styled.p`
  color: #ffffff;
  opacity: 0.8;
  line-height: 25px;
  margin: 0;
  font-size: 16px;

  @media (max-width: 1090px) {
    font-size: 12px;
    line-height: 1.2;
  }
`;
