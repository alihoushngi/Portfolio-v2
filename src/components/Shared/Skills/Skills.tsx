import SkillsContainer from "@/components/Containers/SkillsContainer/SkillsContainer";
import React from "react";
import { SkillsWrapper } from "./SkillsStyled";
import SwipperCustom from "../SwipperCustom/SwipperCustom";
import { mySkills } from "@/data/mySkills";
import Image from "next/image";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsWrapper>
        <Swiper
          className="w-full h-full max-md:max-h-[200px]"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={8}
          autoplay={{
            delay: -10,
            disableOnInteraction: false,
          }}
          speed={900}
          loop
          pagination={false}
        >
          {mySkills.map((skills, index) => {
            return (
              <SwiperSlide key={index} className="h-full">
                <Image
                  src={skills.picture}
                  alt={skills.name}
                  width={20}
                  height={5}
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
