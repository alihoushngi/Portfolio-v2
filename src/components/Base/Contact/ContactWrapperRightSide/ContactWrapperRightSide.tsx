import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Input from "@/components/Shared/Input/Input";
import { FormAtt } from "./ContactWrapperRightSideFormList";

const ContactWrapperRightSide = () => {
  return (
    <div className="w-2/3 max-md:w-full">
      <CardContainer cardCustomStyle="p-10">
        <div className="flex flex-col min-h-[400px] relative z-20 ">
          <h1 className="text-5xl mb-9">
            Lets work with <span className="text-blue-600">Me</span>
          </h1>
          <form className="flex flex-col w-full gap-3">
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
            <textarea
              name="des"
              id="des"
              className="w-full border-none rounded-xl py-4 px-5 text-sm block text-white resize-none h-36"
            ></textarea>
            <button className="w-full capitalize border-none rounded-xl py-4 px-5 text-sm bg-gray-700 text-white inline-block transition-all font-medium hover:bg-white hover:text-black">
              send message
            </button>
          </form>
        </div>
      </CardContainer>
    </div>
  );
};

export default ContactWrapperRightSide;
