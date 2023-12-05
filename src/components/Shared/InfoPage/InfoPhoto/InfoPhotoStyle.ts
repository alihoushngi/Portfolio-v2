import Image from "next/image";
import { styled } from "styled-components";

export const ImageWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  flex: none;
  margin: auto;

  @media (max-width: 1090px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 920px) {
    width: 224px;
    height: 224px;
  }
`;

export const ImageStyled = styled(Image)`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
`;
