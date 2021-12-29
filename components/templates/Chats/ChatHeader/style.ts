import styled from "@emotion/styled";
import { Badge } from "@mui/material";

export const ChatHeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  .chatHeader__moreBtn,
  .chatHeader__back {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chatHeader__account {
    width: calc(100% - 100px);
    height: 50px;

    display: flex;
    .chatHeader__account-avatar {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chatHeader__account-info {
      width: calc(100% - 50px);
      height: 100%;
      display: flex;
      flex-direction: column;

      .name,
      .date {
        width: 100%;
        min-height: 10px;
        font-size: 15px;
      }

      .name {
        font-size: 16px;
        padding-top: 3px;
      }

      .date {
        font-weight: bold;
        padding-bottom: 10px;
      }
    }
  }
`;

export const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    background-color: #44b700;
    color: #44b700;
    box-shadow: 0 0 0 2px ${(p) => p.theme.palette.background.paper};
    &::after {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: ripple 1.2s infinite ease-in-out;
      border: 1px solid currentColor;
      content: " ";
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(0.8);
      opacity: 1;
    }

    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  }
`;
