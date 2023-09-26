"use client";

import React from "react";
import {
  ConactElementDataWrapper,
  ConatctElementAddress,
  ContactElementName,
  ContactElementWrapper,
} from "./StyleContactElement";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Image, { StaticImageData } from "next/image";

interface IContactProps {
  ElementLink: string;
  ContactElementImage: StaticImageData;
  ElementName: string;
  ElementAddress: string;
}

const ConatctElement = ({
  ElementLink,
  ContactElementImage,
  ElementName,
  ElementAddress,
}: IContactProps) => {
  return (
    <ContactElementWrapper href={ElementLink}>
      <CardContainer>
        <Image
          src={ContactElementImage}
          alt={ElementName}
          width={25}
          height={25}
        />
      </CardContainer>
      <ConactElementDataWrapper>
        <ContactElementName>{ElementName}</ContactElementName>
        <ConatctElementAddress>{ElementAddress}</ConatctElementAddress>
      </ConactElementDataWrapper>
    </ContactElementWrapper>
  );
};

export default ConatctElement;
