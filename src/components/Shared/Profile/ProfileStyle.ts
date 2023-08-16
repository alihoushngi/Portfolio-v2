import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
  /* filter: grayscale(100%);
  -webkit-filter: grayscale(100%); */
`;

export const ProfileLink = styled(Link)`
  left: 0;
  top: 0;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 9;
`;

export const ProfileImageWrapperStyle = styled.div`
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
export const ProfileImage = styled(Image)`
  display: block;
  height: auto;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
`;

export const ProfileInfoWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileInfoSyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ProfileInfoDescribeStyle = styled.h4`
  font-size: 12px;
  font-weight: 300;
`;
export const ProfileInfoTitleStyle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;
export const ProfileInfoButtonWrapperStyle = styled.div``;
export const ProfileInfoButtonStyle = styled.button``;
