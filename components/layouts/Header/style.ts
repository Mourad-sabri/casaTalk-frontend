import { Icon, IconButton, OutlinedInput } from "@mui/material";

import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  /* border: 1px solid black; */
  height: 45px;
  display: flex;
  padding: 3px;
  justify-content: space-between;

  & .btns-container {
    display: flex;
    height: 100%;
  }
`;

export const SideBarToggleBtn = styled(IconButton)`
  display: block;

  @media (min-width: 750px) {
    display: none;
  }
`;

export const SearchInput = styled(OutlinedInput)`
  width: 50%;
  margin-left: 10px;
  display: none;

  @media (min-width: 750px) {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  width: 180px;
  height: 100%;

  & img {
    width: 100%;
    height: 40px;
  }
`;

export const NotificationBtn = styled(IconButton)``;

export const AccountBtn = styled(IconButton)``;

export const FriendRequests = styled(IconButton)``;

export const MessageBtn = styled(IconButton)``;

export const SearchButton = styled(IconButton)`
  display: block;

  @media (min-width: 750px) {
    display: none;
  }
`;
