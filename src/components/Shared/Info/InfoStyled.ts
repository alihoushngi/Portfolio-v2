import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

//style
export const InfoStyled = styled(Link)`
  box-sizing: border-box !important;
  position: relative;
  padding: 50px 46px;
  display: flex;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 1090px) {
    padding: 40px 30px;
  }
  @media (max-width: 920px) {
    margin-bottom: 24px;
  }
  @media (max-width: 585px) {
    flex-direction: column;
  }
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
  @media (max-width: 585px) {
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
  font-size: 14px;
  letter-spacing: 0.3px;
  margin-bottom: 3px;
`;

export const DescribtionNameStyled = styled.h1`
  font-size: 36px;
  line-height: 40px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 12px;

  @media (max-width: 1090px) {
    font-size: 30px;
    line-height: 1.2;
  }

  @media (max-width: 920px) {
    font-size: 36px;
    line-height: 1.2;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

export const DescribtionStyled = styled.p`
  letter-spacing: 0.3px;
  margin: 0;
`;
