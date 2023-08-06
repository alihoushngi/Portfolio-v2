import { styled } from "styled-components";

export const StyledMenu = styled.div<{ open: boolean }>`
  @media (max-width: 768px) {
    opacity: ${({ open }) => (open ? "1" : "0")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transform: ${({ open }) =>
      open
        ? "translate3d(0px, 0, 0px) scale(1, 1) scale(1, 1)"
        : "translate3d(0px, -300px, 0px) scale(1, 0.5) scale(1, 0.5)"};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    overflow-x: hidden;
    padding-top: 6rem;
    padding-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transform-origin: 50% 50% 0;
    transition-duration: 500ms;
  }

  ul {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0;
    padding: 0;
    align-items: center;
    text-align: center;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`;
