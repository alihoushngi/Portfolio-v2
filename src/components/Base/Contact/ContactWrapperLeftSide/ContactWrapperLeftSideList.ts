import Mail from "../../../../../public/static/images/gmailMessage.png";
import Phone from "../../../../../public/static/images/PhoneWhite.png";
import linkedin from "../../../../../public/static/images/linkedin.png";

export const ContactList = [
  {
    name: "Gmail",
    Link: "mailto:alihoushngi@gmail.com",
    Icon: Mail,
    AriaLable: "Ali Houshangi Gmail",
  },
  {
    name: "Linkedin",
    Link: "https://www.linkedin.com/in/alihoushangi/",
    Icon: linkedin,
    AriaLable: "Ali Houshangi Linkedin",
  },
];

export const contactData = [
  {
    ContactElementImage: Mail,
    ElementName: "Mail",
    ElementAddress: "blumy.info@gmail.com",
    link: "mailto:alihoushngi@gmail.com",
    AriaLable: "Ali Houshangi Email Link",
  },
  {
    ContactElementImage: Phone,
    ElementName: "Phone",
    ElementAddress: "+98 911-544-7316",
    link: "tel:+989115447316",
    AriaLable: "Ali Houshangi Phone Number",
  },
  {
    ContactElementImage: linkedin,
    ElementName: "linkedin",
    ElementAddress: "alihoushangi",
    link: "https://www.linkedin.com/in/alihoushangi/",
    AriaLable: "Ali Houshangi Linkedin Link",
  },
];
