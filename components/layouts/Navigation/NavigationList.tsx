import React, { Component, ReactElement } from "react";
import Link from "next/link";
import { Add, Group, Home, Message } from "@mui/icons-material";
import { Notifications, Pages, Store, VideoLibrary } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";

import { NavigationContainer } from "./style";

function NavigationButton({
  title,
  icon,
  link,
}: {
  title: string;
  icon: ReactElement;
  link: string;
}) {
  return (
    <li>
      <Link href={link}>
        <Button title={title} size="small" className="nav-btn" startIcon={icon}>
          {title}
        </Button>
      </Link>
    </li>
  );
}

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <ul>
          <NavigationButton title="Home" icon={<Home className="icon-home" />} link="/" />
          <NavigationButton title="Notification" icon={<Notifications />} link="/" />
          <NavigationButton title="Chats" icon={<Message />} link="/" />
          <NavigationButton title="Groups" icon={<Group />} link="/" />
          <NavigationButton title="Pages" icon={<Pages />} link="/" />
          <NavigationButton title="Videos" icon={<VideoLibrary />} link="/" />
          <NavigationButton title="marketplace" icon={<Store />} link="/" />
          <NavigationButton title="ads" icon={<Store />} link="/" />
          <Divider textAlign="left">pages</Divider>
          <NavigationButton title="create page" icon={<Add />} link="/" />
          <Divider textAlign="left">groups</Divider>
          <NavigationButton title="create group" icon={<Add />} link="/" />
          <Divider textAlign="left">stores</Divider>
          <NavigationButton title="create store" icon={<Add />} link="/" />
        </ul>
      </NavigationContainer>
    );
  }
}

export default Navigation;
