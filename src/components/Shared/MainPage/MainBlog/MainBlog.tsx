import React from "react";
import {
  BlogImage,
  BlogImageWrapperStyle,
  BlogInfoButtonStyle,
  BlogInfoButtonWrapperStyle,
  BlogInfoDescribeStyle,
  BlogInfoSyle,
  BlogInfoTitleStyle,
  BlogInfoWrapperStyle,
  BlogLink,
  BlogWrapper,
} from "./MainBlogStyle";
import BlogIcon from "../../../../../public/static/images/BlogIcon.png";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const MainBlog = () => {
  return (
    <CardContainer
      containerStyle="max-h-full h-full flex items-stretch"
      aosDuration="1500"
      aosStyle="fade-right"
    >
      <BlogWrapper>
        <BlogLink href="/blog" />
        <BlogImageWrapperStyle>
          <BlogImage priority src={BlogIcon} alt="logo" width={80} />
        </BlogImageWrapperStyle>
        <BlogInfoWrapperStyle>
          <BlogInfoSyle>
            <BlogInfoDescribeStyle>MY BLOGS EVRYONE NEED</BlogInfoDescribeStyle>
            <BlogInfoTitleStyle>Blog</BlogInfoTitleStyle>
          </BlogInfoSyle>
          <BlogInfoButtonWrapperStyle>
            <BlogInfoButtonStyle>{"-->"}</BlogInfoButtonStyle>
          </BlogInfoButtonWrapperStyle>
        </BlogInfoWrapperStyle>
      </BlogWrapper>
    </CardContainer>
  );
};

export default MainBlog;