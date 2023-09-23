import React from "react";
import { SkillsWrapper } from "./MainSkillsStyled";
import { mySkills } from "@/data/mySkills";
import Image from "next/image";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const MainSkills = () => {
  return (
    <CardContainer containerStyle="w-full h-full" cardCustomStyle="h-fit z-10">
      <SkillsWrapper>
        <Swiper
          className="w-full h-full max-md:max-h-[200px] z-10"
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={8}
          speed={1500}
          loop
          pagination={false}
        >
          {mySkills.map((skills, index) => {
            return (
              <SwiperSlide key={index} className="h-full z-10">
                <Image
                  src={skills.picture}
                  alt={skills.name}
                  width={30}
                  height={30}
                  className="w-auto h-auto grayscale hover:grayscale-0 z-50 transition-all cursor-pointer"
                  priority
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SkillsWrapper>
    </CardContainer>
  );
};

export default MainSkills;
