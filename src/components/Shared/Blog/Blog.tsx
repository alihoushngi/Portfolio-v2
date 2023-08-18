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
} from "./BlogStyle";
import BlogContainer from "@/components/Containers/BlogContainer/BlogContainer";
import BlogIcon from "../../../../public/static/images/BlogIcon.png";

const Blog = () => {
  return (
    <BlogContainer>
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
    </BlogContainer>
  );
};

export default Blog;
