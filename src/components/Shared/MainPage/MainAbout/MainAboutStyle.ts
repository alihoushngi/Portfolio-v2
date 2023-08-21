import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const AboutInfoButtonStyle = styled.button`
  transition: all 400ms ease-in;
  font-weight: thin;
  font-size: 10px;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
  color: gray;
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;

  &:hover {
    ${AboutInfoButtonStyle} {
      color: white;
      font-weight: 900;
      font-size: 12px;
    }
  }
`;

export const AboutLink = styled(Link)`
  left: 0;
  top: 0;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 9;
`;

export const AboutImageWrapperStyle = styled.div`
  width: 80%;
  position: relative;
  overflow: hidden;
  flex: none;
  padding: 1rem;
  margin: auto 20px;

  @media (max-width: 1090px) {
    width: 60%;
    margin: auto;
  }
  @media (max-width: 920px) {
    width: 224px;
  }
  @media (max-width: 640px) {
    margin-bottom: 20px;
    width: 224px;
  }
`;
export const AboutImage = styled(Image)`
  display: block;
  height: auto;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
`;

export const AboutInfoWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AboutInfoSyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const AboutInfoDescribeStyle = styled.h4`
  font-size: 12px;
  font-weight: 300;
`;
export const AboutInfoTitleStyle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;
export const AboutInfoButtonWrapperStyle = styled.div``;
