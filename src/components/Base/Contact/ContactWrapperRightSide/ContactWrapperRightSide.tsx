import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Input from "@/components/Shared/Input/Input";

const FormAtt = [
  {
    InputType: "text",
    InputName: "name",
    InputPlaceholder: "Name",
  },
  {
    InputType: "email",
    InputName: "email",
    InputPlaceholder: "Email",
  },
  {
    InputType: "text",
    InputName: "subject",
    InputPlaceholder: "Subject",
  },
];

const ContactWrapperRightSide = () => {
  return (
    <div className="w-2/3">
      <CardContainer>
        <h1 className="text-5xl">
          Lets work with <span className="text-blue-600">Me</span>
        </h1>
        <form className="flex flex-col w-full">
          {FormAtt.map((data, index) => {
            return (
              <Input
                key={index}
                InputName={data.InputName}
                InputType={data.InputType}
                InputPlaceholder={data.InputPlaceholder}
              />
            );
          })}
          <textarea name="des" id="des"></textarea>
          <button>send message</button>
        </form>
      </CardContainer>
    </div>
  );
};

export default ContactWrapperRightSide;
