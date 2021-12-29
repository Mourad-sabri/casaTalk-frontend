import styled from "@emotion/styled";
import { SentMessageProps } from "./SentMessage";
export const SentMessageContainer = styled.div`
  width: 100%;
  min-height: 10px;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  .content {
    width: calc(100% - 100px);

    .message {
      background: linear-gradient(to right top, #0a29b5, #003cbd, #004cc4, #005bc9, #1a69cd);
      color: white;
      padding: 5px;
      border-radius: 8px;
      border-bottom-right-radius: 0px;
      font-weight: 500;
    }
    .date {
      font-size: 14px;
    }
  }
`;
