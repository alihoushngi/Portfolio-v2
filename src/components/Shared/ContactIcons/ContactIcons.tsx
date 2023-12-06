"use client";

import React from "react";
import Link from "next/link";
import { ReactComponent } from "@/types/types";
import { IContactProps } from "./ContactIconTypes";
import Image from "next/image";

const ContactIcons: ReactComponent<IContactProps> = (props) => {
  const {
    SocialLink,
    SocialIconSrc,
    SocialIconAlt,
    SocialIconWidth,
    SocialIconheight,
  } = props;

  return (
    <div className="bg-gradient-to-r from-[#ffffff80] to-[#ffffff1a] opacity-50 hover:opacity-100 backdrop-blur-2xl w-16 h-16 rounded-full flex justify-center items-center border-[0.5px] border-solid border-gray-600 z-50 transition-all ease-in max-md:w-12 max-md:h-12 max-sm:opacity-5 max-sm:hover:opacity-100 max-sm:hover:pointer">
      <Link
        href={SocialLink}
        target="_blank"
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          priority
          src={SocialIconSrc}
          alt={SocialIconAlt}
          width={SocialIconWidth}
          height={SocialIconheight}
        />
      </Link>
    </div>
  );
};

export default ContactIcons;
