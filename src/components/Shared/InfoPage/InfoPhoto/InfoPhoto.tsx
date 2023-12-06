"use client";

import React from "react";
import Image from "next/image";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Avatar from "../../../../../public/static/images/Avatar3.jpg";

const InfoPhoto = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full justify-center md:w-[29%]"
      cardCustomStyle="md:w-fit max-md:w-full"
    >
      <div className="w-full h-full relative overflow-hidden rounded-2xl flex-none m-auto max-2l:w-52 max-2l:h-52 max-l:w-56 max-l:h-56">
        <Image
          className="block max-w-full w-full h-full object-cover border-0 rounded-none shadow-none grayscale"
          priority
          src={Avatar}
          alt="info avatar"
        />
      </div>
    </CardContainer>
  );
};

export default InfoPhoto;
