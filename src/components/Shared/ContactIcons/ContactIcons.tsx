import React from "react";
import { ContactSochial, SocialImageWrapperStyle } from "./ContactIcon";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface IContactProps {
  SocialLink: string;
  SocialIconSrc: StaticImageData;
  SocialIconAlt: string;
  SocialIconWidth: number;
  SocialIconheight: number;
}

const ContactIcons = ({
  SocialLink,
  SocialIconSrc,
  SocialIconAlt,
  SocialIconWidth,
  SocialIconheight,
}: IContactProps) => {
  return (
    <SocialImageWrapperStyle>
      <Link
        href={SocialLink}
        target="_blank"
        className="w-full h-full flex justify-center items-center"
      >
        <ContactSochial
          priority
          src={SocialIconSrc}
          alt={SocialIconAlt}
          width={SocialIconWidth}
          height={SocialIconheight}
        />
      </Link>
    </SocialImageWrapperStyle>
  );
};

export default ContactIcons;
