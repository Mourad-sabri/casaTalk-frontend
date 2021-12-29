import React, { Component } from "react";
import { SideBarContainer } from "./style";
import Navigation from "../Navigation/NavigationList";

class SideBar extends Component {
  render() {
    return (
      <SideBarContainer>
        <Navigation />
      </SideBarContainer>
    );
  }
}

export default SideBar;
