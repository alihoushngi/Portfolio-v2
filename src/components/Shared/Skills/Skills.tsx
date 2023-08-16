import SkillsContainer from "@/components/Containers/SkillsContainer/SkillsContainer";
import React from "react";
import { SkillsWrapper } from "./SkillsStyled";
import { mySkills } from "@/data/mySkills";
import Image from "next/image";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Skills = () => {
  return (
    <SkillsContainer>
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
                  width={15}
                  height={3}
                  className="w-auto h-auto"
                  priority
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
