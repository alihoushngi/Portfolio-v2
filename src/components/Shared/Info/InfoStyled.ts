import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

//style
export const FirstSecWrapperStyled = styled(Link)``;

export const ImageWrapperStyled = styled.div`
  width: 224px;
  height: 224px;
  position: relative;
  overflow: hidden;
  border-radius: 30px 0 30px 0;
  flex: none;

  @media (max-width: 1090px) {
    width: 190px;
    height: 190px;
  }

  @media (max-width: 920px) {
    width: 224px;
    height: 224px;
  }

  @media (max-width: 585px) {
    margin: auto;
  }
`;

export const ImageStyled = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  max-width: 100%;
  border: none;
  border-radius: 30px 0 30px 0;
  box-shadow: 0;
  object-fit: cover;
`;

export const DescribtionWrapperStyled = styled.div``;

export const DescribtionTitleStyled = styled.h4``;

export const DescribtionNameStyled = styled.h1``;

export const DescribtionStyled = styled.p``;
