import React from "react";
import Image from "next/image";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import { MyService } from "./MainServiceList";

const MainServices = () => {
  return (
    <CardContainer containerStyle="max-h-full h-full flex items-stretch">
      <div className="transition-all duration-700 flex justify-between flex-col relative w-full max-w-full h-full overflow-x-hidden grayscale hover:grayscale-0 z-50">
        <div className="flex justify-around w-full relative overflow-hidden p-7">
          {MyService.map((data) => {
            return (
              <Image
                key={data.name}
                priority
                src={data.image}
                alt={data.name}
                width={30}
              />
            );
          })}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-light">Whats can I do ?</h3>
            <h2 className="text-xl font-bold text-white">Services</h2>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default MainServices;
