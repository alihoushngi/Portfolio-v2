import { styled } from "styled-components";

//----------style----------
export const SectionWrapperStyle = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const SectionStyled = styled.div`
  position: relative;
  min-height: 1px;
  display: flex;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex: 0 0 auto;
    width: 100%;
  }
`;

export const SectionContainerStyled = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  align-content: center;
  padding: 0 0.75rem;

  @media (min-width: 768px) {
    padding: 0px;
  }
`;

export const BoxWrapperStyled = styled.div`
  width: 100%;
`;

export const StyledBox = styled.div`
  width: 100%;
  position: relative;
  padding: 50px 46px;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  background: #0f0f0f;
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(4px);
  /* -webkit-backdrop-filter: blur(4px); */
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    border-radius: 30px;
    opacity: 0.25;
    box-sizing: border-box;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background: linear-gradient(to right, rgb(255 255 255 / 15%), rgb(255 255 255 / 1%)); */
    /* background: linear-gradient(
      120deg,
      rgb(255 255 255 / 12%),
      rgb(255 255 255 / 1%)
    ); */
    content: "";
    z-index: -1;
    border-radius: 30px;
    margin: -1px;
  }

  @media (max-width: 585px) {
    flex-direction: column;
  }
  @media (max-width: 920px) {
    margin-bottom: 24px;
  }
  @media (max-width: 1090px) {
    padding: 40px 30px;
  }
`;
