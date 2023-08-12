import { styled } from "styled-components";

// style
export const BergerWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  font-size: 25px;
  line-height: 2rem;
  z-index: 50;
  cursor: pointer;

  @media (min-width: 724px) {
    display: none;
  }

  div {
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    display: block;
    transition: 0.4s;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open &&
        "translate3d(0px, 6px, 0px) scale(1, 1) rotate(45deg) scale(1, 1)"};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open && "scale(0)"};
    }

    &:nth-child(3) {
      transform-origin: left;
      transform: ${({ open }) =>
        open &&
        "translate3d(4px, -2px, 0px) scale(1, 1) rotate(-45deg) scale(1, 1)"};
    }
  }
`;
