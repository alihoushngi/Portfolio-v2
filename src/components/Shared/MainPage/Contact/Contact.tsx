import React from "react";
import {
  ContactSochial,
  ContactSocialWrapperStyle,
  ContactInfoButtonStyle,
  ContactInfoButtonWrapperStyle,
  ContactInfoDescribeStyle,
  ContactInfoSyle,
  ContactInfoTitleStyle,
  ContactInfoWrapperStyle,
  ContactLink,
  ContactWrapper,
  SocialImageWrapperStyle,
} from "./ContactStyle";
import Telegram from "../../../../../public/static/images/telegramMessage.png";
import Instagram from "../../../../../public/static/images/instagramMessage.png";
import Link from "next/link";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const Contact = () => {
  return (
    <CardContainer
      containerStyle="max-h-full h-full flex items-stretch"
      aosDuration="2500"
      aosStyle="fade-left"
    >
      <ContactWrapper>
        <ContactLink href="/contact" />
        <ContactSocialWrapperStyle>
          <SocialImageWrapperStyle>
            <Link href="https://t.me/Alihoushangi" target="_blank">
              <ContactSochial
                priority
                src={Telegram}
                alt="telegram"
                width={25}
                height={25}
              />
            </Link>
          </SocialImageWrapperStyle>
          <SocialImageWrapperStyle>
            <Link
              href="https://www.instagram.com/alihoushngii/"
              target="_blank"
            >
              <ContactSochial
                priority
                src={Instagram}
                alt="instagram"
                width={25}
                height={25}
              />
            </Link>
          </SocialImageWrapperStyle>
        </ContactSocialWrapperStyle>
        <ContactInfoWrapperStyle>
          <ContactInfoSyle>
            <ContactInfoDescribeStyle>CALL ME</ContactInfoDescribeStyle>
            <ContactInfoTitleStyle>Contact</ContactInfoTitleStyle>
          </ContactInfoSyle>
          <ContactInfoButtonWrapperStyle>
            <ContactInfoButtonStyle>{"-->"}</ContactInfoButtonStyle>
          </ContactInfoButtonWrapperStyle>
        </ContactInfoWrapperStyle>
      </ContactWrapper>
    </CardContainer>
  );
};

export default Contact;
