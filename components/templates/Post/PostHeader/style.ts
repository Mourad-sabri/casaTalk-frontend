import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";

export const PostHeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;

  & .post__avatar {
    display: flex;
    align-items: center;
  }

  & .post__userInfo {
    width: calc(100% - 200px);
    position: relative;
  }

  & .btn {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const UserName = styled.div`
  font-size: 15px;
  padding-top: 4px;
  padding-left: 7px;
  height: 25px;
  display: flex;
  & .username {
    color: blue;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  & .postedTo {
    display: flex;
    margin-left: 5px;
    & .icon {
      font-size: 19px;
      margin-top: 1px;
      margin-right: 3px;
      color: gray;
    }

    & .postedTo_title {
      color: blue;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const DatePost = styled.span`
  font-size: 14px;
  height: 17px;
  padding-left: 7px;
  position: absolute;
  bottom: 11px;

  & .time {
    display: flex;

    & .icon {
      font-size: 16px;
      margin-top: 3px;
      margin-right: 3px;
    }
  }
`;

export const Sponsored = styled.span`
  font-size: 14px;
  height: 17px;
  padding-left: 7px;
  position: absolute;
  bottom: 11px;
`;
