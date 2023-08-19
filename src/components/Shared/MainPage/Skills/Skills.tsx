import React from "react";
import { SkillsWrapper } from "./SkillsStyled";
import { mySkills } from "@/data/mySkills";
import Image from "next/image";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const Skills = () => {
  return (
    <CardContainer
      containerStyle="w-full h-full"
      cardCustomStyle="h-fit"
      aosDuration="2000"
      aosStyle="fade-down"
    >
      <SkillsWrapper>
        <Swiper
          className="w-full h-full max-md:max-h-[200px]"
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={8}
          speed={1000}
          loop
          pagination={false}
        >
          {mySkills.map((skills, index) => {
            return (
              <SwiperSlide key={index} className="h-full">
                <Image
                  src={skills.picture}
                  alt={skills.name}
                  width={30}
                  height={30}
                  className="w-auto h-auto"
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

export default Skills;
