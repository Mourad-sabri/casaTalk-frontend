import React, { Component, useContext } from "react";
import { Drawer } from "@mui/material";
import Portal from "../../elements/Portal/Portal";
import Navigation from "../Navigation/NavigationList";
import { DrawerNavigationContainer } from "./style";
import { useGlobalState } from "../../../hooks/useGlobalState";
import { Context } from "../../../context/Provider";

function NavigationDrawer() {
  const { isDrawerOpen } = useGlobalState();
  const { toggleDrawer } = useContext(Context);
  return (
    <Portal selector="#navigation-drawer">
      <Drawer open={isDrawerOpen} onClose={() => toggleDrawer!(false)}>
        <DrawerNavigationContainer>
          <Navigation />
        </DrawerNavigationContainer>
      </Drawer>
    </Portal>
  );
}

export default NavigationDrawer;
