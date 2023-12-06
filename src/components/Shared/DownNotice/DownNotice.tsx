"use client";

import React from "react";
import { StyleDownNoticeChevron } from "./StyleDownNotice";

const DownNotice = () => {
  return (
    <>
      <div className="relative w-3 h-3">
        <StyleDownNoticeChevron></StyleDownNoticeChevron>
        <StyleDownNoticeChevron></StyleDownNoticeChevron>
        <StyleDownNoticeChevron></StyleDownNoticeChevron>
      </div>
    </>
  );
};

export default DownNotice;
