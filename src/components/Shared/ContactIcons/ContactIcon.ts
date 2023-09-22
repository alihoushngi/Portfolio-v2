import Image from "next/image";
import { styled } from "styled-components";

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

  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 428px) {
    opacity: 0.5;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const ContactSochial = styled(Image)``;
