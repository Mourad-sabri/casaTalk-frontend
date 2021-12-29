import styled from "@emotion/styled";
import { ReceivedMessageProps } from "./ReceivedMessage";

export const ReceivedMessageContainer = styled.div<ReceivedMessageProps>`
  width: 100%;
  min-height: 10px;
  display: flex;
  margin-top: ${(p) => (p.showAvatar ? "5px" : "1px")};

  .account {
    width: 50px;
    min-height: 50px;
    align-items: flex-end;
    justify-content: flex-end;
    display: ${(p) => (p.showAvatar ? "flex" : "none")};
  }

  .message {
    width: calc(100% - 50px);
    min-height: 10px;

    .date {
      width: 100%;
      height: 20px;
      font-size: 14px;
      margin-bottom: 5px;
      padding-left: 7px;
      display: ${(p) => (p.showAvatar ? "block" : "none")};
    }

    .content {
      width: 100%;
      min-height: 10px;
      border-radius: 8px;
      border-bottom-left-radius: 0px;
      padding: 5px;
      margin-bottom: ${(p) => (p.showAvatar ? "5px" : "1px")};
      font-weight: 500;
      background: linear-gradient(to right top, #f1f1e6, #eaf4e0, #ddf7df, #cbfbe4, #b4fff1);
      margin-left: ${(p) => (p.showAvatar ? "0px" : "50px")};
    }
  }
`;
