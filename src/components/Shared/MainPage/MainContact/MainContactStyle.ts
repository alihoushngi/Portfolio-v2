import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const ContactInfoButtonStyle = styled.button`
  transition: all 400ms ease-in;
  font-weight: thin;
  font-size: 10px;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;

  &:hover {
    ${ContactInfoButtonStyle} {
      color: white;
      font-weight: 900;
      font-size: 12px;
    }
  }
`;

export const ContactLink = styled(Link)`
  left: 0;
  top: 0;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 9;
`;

export const ContactSocialWrapperStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 1rem;
`;

export const SocialImageWrapperStyle = styled.div`
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.1)
  );
  opacity: 1;
  backdrop-filter: blur(40px);
  width: 70px;
  height: 70px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid gray;
  z-index: 1000;
  transition: all 100ms ease-in;

  @media (min-width: 428px) {
    opacity: 0.5;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const ContactSochial = styled(Image)``;

export const ContactInfoWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContactInfoSyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ContactInfoDescribeStyle = styled.h4`
  font-size: 12px;
  font-weight: 300;
`;
export const ContactInfoTitleStyle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;
export const ContactInfoButtonWrapperStyle = styled.div``;
