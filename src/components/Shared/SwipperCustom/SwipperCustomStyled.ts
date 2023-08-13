import { styled, keyframes } from "styled-components";

//keyframe

const marquee = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-65.3%);
    }
`;

//keyframe

export const SwipperWrapper = styled.div`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  font-size: 12px;
  animation: ${marquee} 10s linear infinite;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
