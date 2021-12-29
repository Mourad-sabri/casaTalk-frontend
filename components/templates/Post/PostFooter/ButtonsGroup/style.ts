import styled from "@emotion/styled";
import { Badge } from "@mui/material";
export const ButtonsContainer = styled.div`
  height: 33px;
  margin-top: 5px;

  & .btn:not(:first-child) {
    margin-left: 10px;
  }
`;

export const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    right: -3;
    top: 30;
    border: 2px solid ${(p) => p.theme.palette.background.paper};
    padding: 0 4px;
  }
`;
