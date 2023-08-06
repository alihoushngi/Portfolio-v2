import { styled } from "styled-components";

export const BergerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.5rem;
  height: 1rem;
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  z-index: 10;
  cursor: pointer;
`;

export const Bergerline = styled.span`
  width: 100%;
  height: 1px;
  background-color: white;
  display: block;
  transform: 0.4s;

  :nth-last-child() {
    transform-origin: left;
  }
`;
