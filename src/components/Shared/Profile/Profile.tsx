import React from "react";
import {
  ProfileImage,
  ProfileImageWrapperStyle,
  ProfileInfoButtonStyle,
  ProfileInfoButtonWrapperStyle,
  ProfileInfoDescribeStyle,
  ProfileInfoSyle,
  ProfileInfoTitleStyle,
  ProfileInfoWrapperStyle,
  ProfileLink,
  ProfileWrapper,
} from "./ProfileStyle";
import ProfileContainer from "@/components/Containers/ProfileContainer/ProfileContainer";
import Logo from "../../../../public/static/images/logow2.png";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileLink href="#" />
        <ProfileImageWrapperStyle>
          <ProfileImage priority src={Logo} alt="logo" />
        </ProfileImageWrapperStyle>
        <ProfileInfoWrapperStyle>
          <ProfileInfoSyle>
            <ProfileInfoDescribeStyle>more Profile me</ProfileInfoDescribeStyle>
            <ProfileInfoTitleStyle>Who I am ?</ProfileInfoTitleStyle>
          </ProfileInfoSyle>
          <ProfileInfoButtonWrapperStyle>
            <ProfileInfoButtonStyle>{"-->"}</ProfileInfoButtonStyle>
          </ProfileInfoButtonWrapperStyle>
        </ProfileInfoWrapperStyle>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default Profile;
