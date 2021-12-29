import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const NotificationContainer = styled(Card)`
  width: 95%;
  min-height: 70px;
  display: flex;
  margin-top: 5px;

  & .notification-avatar {
    width: 60px;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .notification-content {
    min-height: 70px;
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .text,
    .date {
      min-height: 10px;
      font-size: 15px;
    }

    .text {
      :hover {
        text-decoration: underline;
        cursor: default;
      }
    }

    .date {
      font-weight: bold;
    }
  }
`;
