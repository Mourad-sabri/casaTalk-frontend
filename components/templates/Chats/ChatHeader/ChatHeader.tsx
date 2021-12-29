import React, { useState } from "react";
import { ArrowBack, More, MoreVert } from "@mui/icons-material";
import { Avatar, Badge, Button, IconButton } from "@mui/material";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { ChatHeaderContainer, StyledBadge } from "./style";

function ChatHeader() {
  const [isOpenMenu, setOpenMenu] = useState<any>(null);

  const open = Boolean(isOpenMenu);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <ChatHeaderContainer>
      <div className="chatHeader__back">
        <IconButton>
          <ArrowBack />
        </IconButton>
      </div>
      <div className="chatHeader__account">
        <div className="chatHeader__account-avatar">
          <StyledBadge
            variant="dot"
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar>Md</Avatar>
          </StyledBadge>
        </div>
        <div className="chatHeader__account-info">
          <div className="name">Mourad</div>
          <div className="date">online</div>
        </div>
      </div>
      <div className="chatHeader__moreBtn">
        <IconButton
          aria-controls="Menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleButtonClick}
        >
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={isOpenMenu}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu",
          }}
        >
          <MenuItem>Block</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Menu>
      </div>
    </ChatHeaderContainer>
  );
}

export default ChatHeader;
