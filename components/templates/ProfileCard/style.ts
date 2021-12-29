import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const ProfileContainer = styled(Card)`
  width: 95%;
  min-height: 100px;
  margin: auto;
  position: relative;

  & .cover {
    width: 100%;
    min-height: 100px;
  }

  & .avatar {
    position: absolute;
    bottom: 20px;
    left: 30px;
  }

  & .tabs {
    margin-left: 170px;
  }
  .btns {
    position: absolute;
    right: 30px;
    bottom: 40px;
  }
`;

export const ProfileContentCard = styled(Card)``;
