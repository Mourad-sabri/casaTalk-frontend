import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const AddPostContainer = styled(Card)`
  width: 95%;
  min-height: 100px;
  padding: 5px;
  margin: auto;

  & .addPost__input {
    width: 100%;
    min-height: 50px;
    display: flex;

    & .addPost__input-avatar {
      width: 50px;
      min-height: 50px;
      padding-top: 5px;
    }

    & .addPost__input-oulined {
      width: calc(100% - 50px);
      min-height: 50px;
      padding-top: 5px;
    }
  }
`;
