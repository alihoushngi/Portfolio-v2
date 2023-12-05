import Link from "next/link";
import { styled } from "styled-components";

export const ContactElementWrapper = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 767px) {
    width: fit-content !important;
  }
`;

export const ConactElementDataWrapper = styled.div``;

export const ContactElementName = styled.span`
  text-transform: uppercase;
`;

export const ConatctElementAddress = styled.p`
  color: #ffffff;
`;

ConatctElementAddress;
