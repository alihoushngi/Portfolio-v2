import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

//style
export const InfoWrapperStyle = styled.div`
  padding: 40px 40px;
  display: flex;
  align-items: start;
  gap: 20px;

  @media (max-width: 1024px) {
    padding: 1rem;
  }

  @media (max-width: 920px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 639px) {
    flex-direction: column;
  }
`;

export const InfoStyled = styled(Link)`
  left: 0;
  top: 0;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 100;
`;

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
  @media (max-width: 640px) {
    margin: auto;
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

export const DescribtionWrapperStyled = styled.div`
  padding-top: 30px;
  position: initial;

  @media (max-width: 1090px) {
    padding-top: 10px;
  }

  @media (max-width: 425px) {
    padding-right: 20px;
  }
`;

export const DescribtionTitleStyled = styled.h4`
  color: #bcbcbc;
  opacity: 0.7;
  font-size: 10px;
  letter-spacing: 0.3px;
  margin-bottom: 3px;

  @media (max-width: 1090px) {
    font-size: 10px;
    line-height: 1.2;
  }

  @media (max-width: 920px) {
    font-size: 15px;
    line-height: 1.2;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const DescribtionNameStyled = styled.h1`
  font-size: 25px;
  line-height: 40px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 12px;

  @media (max-width: 1090px) {
    font-size: 25px;
    line-height: 1.2;
  }

  @media (max-width: 920px) {
    font-size: 35px;
    line-height: 1.2;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export const DescribtionStyled = styled.p`
  font-size: 10px;
  letter-spacing: 0.3px;
  margin: 0;
  z-index: 2;
  position: relative;
  line-height: 1.6;

  @media (max-width: 1090px) {
    font-size: 10px;
    line-height: 1.2;
  }

  @media (max-width: 920px) {
    font-size: 20px;
    line-height: 1.2;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;
