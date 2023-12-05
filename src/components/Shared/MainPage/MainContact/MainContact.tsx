import React from "react";
import {
  ContactSocialWrapperStyle,
  ContactInfoButtonStyle,
  ContactInfoButtonWrapperStyle,
  ContactInfoDescribeStyle,
  ContactInfoSyle,
  ContactInfoTitleStyle,
  ContactInfoWrapperStyle,
  ContactLink,
  ContactWrapper,
} from "./MainContactStyle";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import ContactIcons from "../../ContactIcons/ContactIcons";
import Linkedin from "../../../../../public/static/images/linkedinMessage.png";
import Gmail from "../../../../../public/static/images/gmailMessage.png";

const ContactList = [
  {
    name: "Gmail",
    Link: "mailto:alihoushngi@gmail.com",
    Icon: Gmail,
  },
  {
    name: "Linkedin",
    Link: "https://www.linkedin.com/in/alihoushangi/",
    Icon: Linkedin,
  },
];

const MainContact = () => {
  return (
    <CardContainer containerStyle="max-h-full h-full flex items-stretch">
      <ContactWrapper>
        <ContactLink href="/contact" />
        <ContactSocialWrapperStyle>
          {ContactList.map((item, index) => {
            return (
              <ContactIcons
                key={index}
                SocialLink={item.Link}
                SocialIconSrc={item.Icon}
                SocialIconAlt={item.name}
                SocialIconWidth={25}
                SocialIconheight={25}
              />
            );
          })}
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

export default MainContact;
