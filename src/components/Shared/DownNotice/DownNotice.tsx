"use client";

import React from "react";
import {
  StyleDownNoticeChevron,
  StyleDownNoticeContainer,
  StyleDownNoticeText,
} from "./StyleDownNotice";

const DownNotice = () => {
  return (
    <>
      <StyleDownNoticeContainer>
        <StyleDownNoticeChevron></StyleDownNoticeChevron>
        <StyleDownNoticeChevron></StyleDownNoticeChevron>
        <StyleDownNoticeChevron></StyleDownNoticeChevron>
        {/* <StyleDownNoticeText>Scroll down</StyleDownNoticeText> */}
      </StyleDownNoticeContainer>
    </>
  );
};

export default DownNotice;
