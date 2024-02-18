"use client";

import React, { useEffect, useState } from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Input from "@/components/Shared/Input/Input";
import { FormAtt } from "./ContactWrapperRightSideFormList";
import { useForm, ValidationError } from "@formspree/react";

const ContactWrapperRightSide = () => {
  const [state, handleSubmit] = useForm("mvoeadql");
  const [formSubmited, setFormSubmited] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setFormSubmited(true);
    }
  }, [state]);

  return (
    <div className="w-full max-md:w-full mb-8">
      <CardContainer cardCustomStyle="p-10">
        <div className="flex flex-col min-h-[400px] relative z-20 ">
          <h1 className="text-5xl mb-9">
            Lets work with <span className="text-blue-600">Me</span>
          </h1>
          {!formSubmited ? (
            <form
              className="flex flex-col w-full gap-3"
              onSubmit={handleSubmit}
            >
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
                placeholder="Type your message ..."
              />
              <ValidationError
                prefix="Message"
                field="des"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full capitalize border-none rounded-xl py-4 px-5 text-sm bg-gray-700 text-white inline-block transition-all font-medium hover:bg-white hover:text-black"
              >
                send message
              </button>
            </form>
          ) : (
            <h3 className="text-center text-2xl font-semibold ">
              Form submitted
            </h3>
          )}
        </div>
      </CardContainer>
    </div>
  );
};

export default ContactWrapperRightSide;
