"use client";

import React from "react";
import Avatar from "../../../../../public/static/images/Avatar2.jpg";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Image from "next/image";

const MainInfo = () => {
  return (
    <CardContainer containerStyle="max-l:w-full md:w-1/2">
      <div className="p-3 flex items-center gap-5 max-lg:p-4 max-l:mb-6 max-sm:flex-col">
        <div className="w-56 h-56 relative overflow-hidden rounded-ss-3xl rounded-ee-3xl flex-none max-2l:w-48 max-2l:h-48 max-l:w-56 max-l:h-56 max-sm:m-auto">
          <Image
            priority
            src={Avatar}
            alt="avatar"
            className="block h-auto object-cover w-full max-w-full border-none rounded-none shadow-none"
          />
        </div>
        <div className="max-2l:pt-2 max-sm:pr-5">
          <h3 className="text-[#bcbcbc] opacity-70 text-[10px] mb-1 max-2l:leading-5 max-l:text-sm">
            FRONTEND DEVELOPER
          </h3>
          <h1 className="text-2xl leading-10 text-white font-medium mb-3 max-2l:text-2xl max-2l:leading-5 max-l:text-4xl max-l:leading-5 max-sm:text-sm">
            Ali Houshangi
          </h1>
          <h2 className="text-xs m-0 z-20 relative leading-6 max-2l:leading-5 max-l:text-xl max-l:leading-5 max-sm:text-[10px]">
            I am a frontend web designer with a passion for Next.js technology
          </h2>
        </div>
      </div>
    </CardContainer>
  );
};

export default MainInfo;
