import styled from "styled-components";

export const StyleDownNoticeContainer = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
`;

export const StyleDownNoticeChevron = styled.div`
  position: absolute;
  width: 15px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  &:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  &::before,
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &::before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &::after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
`;

export const StyleDownNoticeText = styled.div`
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 10px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`;
