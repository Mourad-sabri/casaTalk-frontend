import React, { Component } from "react";
import { FormatAlignCenter, NotificationsActive, Search } from "@mui/icons-material";
import { GroupAdd, Message } from "@mui/icons-material";

import { AccountBtn, FriendRequests, HeaderContainer, LogoContainer, MessageBtn } from "./style";
import { NotificationBtn, SearchButton, SearchInput, SideBarToggleBtn } from "./style";
import { Avatar, Badge } from "@mui/material";
import { getGlobalState, GlobalAppState } from "../../../context/Provider";

class Header extends Component<GlobalAppState> {
  render() {
    return (
      <HeaderContainer>
        <SideBarToggleBtn onClick={() => this.props.toggleDrawer!(!this.props.isDrawerOpen)}>
          <FormatAlignCenter />
        </SideBarToggleBtn>
        <LogoContainer>
          <img src="casaTalk-logo.png" alt="logo image" />
        </LogoContainer>
        <SearchInput
          size="small"
          startAdornment={<Search />}
          placeholder="find friends , posts , videos ..."
          inputProps={{
            style: { paddingLeft: "10px" },
          }}
        />

        <div className="btns-container">
          <SearchButton>
            <Search />
          </SearchButton>
          <FriendRequests>
            <Badge badgeContent={10} color="secondary">
              <GroupAdd />
            </Badge>
          </FriendRequests>

          <NotificationBtn>
            <Badge badgeContent={10} color="secondary">
              <NotificationsActive />
            </Badge>
          </NotificationBtn>

          <MessageBtn>
            <Message />
          </MessageBtn>
        </div>

        <AccountBtn>
          <Avatar sx={{ width: 28, height: 28 }} />
        </AccountBtn>
      </HeaderContainer>
    );
  }
}

export default getGlobalState(Header);
