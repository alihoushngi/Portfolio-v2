"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Image from "next/image";
import { IContactProps } from "./ContactElementTypes";
import Link from "next/link";
import { ReactComponent } from "@/types/types";

const ConatctElement: ReactComponent<IContactProps> = (props) => {
  const {
    ElementLink,
    ContactElementImage,
    ElementName,
    ElementAddress,
    ContactElementAriaLable,
  } = props;

  return (
    <Link
      href={ElementLink}
      aria-label={ContactElementAriaLable}
      className="flex gap-4 items-center max-md:w-fit"
    >
      <CardContainer
        aos={false}
        cardCustomStyle="max-md:w-fit"
        containerStyle="max-md:w-fit max-md:flex-[unset] w-fit"
      >
        <Image
          src={ContactElementImage}
          alt={ElementName}
          width={25}
          height={25}
        />
      </CardContainer>
      <div>
        <h4 className="uppercase">{ElementName}</h4>
        <p className="text-white uppercase">{ElementAddress}</p>
      </div>
    </Link>
  );
};

export default ConatctElement;
