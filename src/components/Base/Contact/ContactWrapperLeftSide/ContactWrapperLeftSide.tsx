import ConatctElement from "@/components/Shared/ConatctElement/ConatctElement";
import React from "react";
import Mail from "../../../../../public/static/images/gmailMessage.png";
import Phone from "../../../../../public/static/images/PhoneWhite.png";
import linkedin from "../../../../../public/static/images/linkedin.png";
import ContactIcons from "@/components/Shared/ContactIcons/ContactIcons";

const ContactList = [
  {
    name: "Gmail",
    Link: "mailto:alihoushngi@gmail.com",
    Icon: Mail,
  },
  {
    name: "Linkedin",
    Link: "https://www.linkedin.com/in/alihoushangi/",
    Icon: linkedin,
  },
];

const contactData = [
  {
    ContactElementImage: Mail,
    ElementName: "Mail",
    ElementAddress: "blumy.info@gmail.com",
    link: "mailto:alihoushngi@gmail.com",
  },
  {
    ContactElementImage: Phone,
    ElementName: "Phone",
    ElementAddress: "+98 911-544-7316",
    link: "tel:+989115447316",
  },
  {
    ContactElementImage: linkedin,
    ElementName: "linkedin",
    ElementAddress: "alihoushangi",
    link: "https://www.linkedin.com/in/alihoushangi/",
  },
];

const ContactWrapperLeftSide = () => {
  return (
    <div className="w-1/3 max-md:w-full max-md:flex max-md:gap-9 max-md:mb-9 max-md:flex-col">
      <div>
        <h3 className="uppercase text-white">Contact Info</h3>
        <div className="mt-16 flex flex-col gap-8">
          {contactData.map((data, key) => {
            return (
              <ConatctElement
                key={key}
                ElementLink={data.link}
                ContactElementImage={data.ContactElementImage}
                ElementAddress={data.ElementAddress}
                ElementName={data.ElementName}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="uppercase text-white mt-16">Social Info</h3>
        <div className="mt-8 flex gap-8">
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
        </div>
      </div>
    </div>
  );
};

export default ContactWrapperLeftSide;
