import React from "react";
import ConatctElement from "@/components/Shared/ConatctElement/ConatctElement";
import ContactIcons from "@/components/Shared/ContactIcons/ContactIcons";
import { ContactList, contactData } from "./ContactWrapperLeftSideList";

const ContactWrapperLeftSide = () => {
  return (
    <div className="w-full max-md:w-full flex max-md:gap-9 max-md:mb-9 flex-col items-center">
      <div>
        <h3 className="uppercase text-white font-bold text-4xl">
          Contact Info
        </h3>
        <div className="mt-16 flex gap-8 max-md:flex-col">
          {contactData.map((data, key) => {
            return (
              <ConatctElement
                key={key}
                ElementLink={data.link}
                ContactElementImage={data.ContactElementImage}
                ElementAddress={data.ElementAddress}
                ElementName={data.ElementName}
                ContactElementAriaLable={data.AriaLable}
              />
            );
          })}
        </div>
      </div>
      <div className="hidden">
        <h3 className="uppercase text-white mt-16">Social Info</h3>
        <div className="mt-8 flex gap-8">
          {ContactList.map((item, index) => {
            return (
              <ContactIcons
                key={index}
                SocialLink={item.Link}
                SocialIconSrc={item.Icon}
                SocialIconAlt={item.name}
                SocialAriaLable={item.AriaLable}
                SocialIconWidth={25}
                SocialIconheight={25}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactWrapperLeftSide;
