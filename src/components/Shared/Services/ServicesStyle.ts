import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const ServicesLink = styled(Link)`
  left: 0;
  top: 0;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 9;
`;

export const ServicesIconWrapperStyle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 1.9rem;
`;
export const ServicesImage = styled(Image)``;

export const ServicesInfoWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ServicesInfoSyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ServicesInfoDescribeStyle = styled.h4`
  font-size: 12px;
  font-weight: 300;
`;
export const ServicesInfoTitleStyle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;
export const ServicesInfoButtonWrapperStyle = styled.div``;
export const ServicesInfoButtonStyle = styled.button``;
