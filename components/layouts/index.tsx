import React, { Component, ReactElement, ReactNode } from "react";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import { LayoutContainer } from "./style";
import NavigationDrawer from "./Drawer/Drawer";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LayoutContainer>
          <SideBar></SideBar>
          <Main>
            <section className="main-page"> {this.props.children} </section>
            <section className="ad-section"></section>
          </Main>
        </LayoutContainer>

        {/* <Footer> footer </Footer> */}

        <NavigationDrawer />
      </React.Fragment>
    );
  }
}

export default function getLayout(ReactCompoenent: ReactNode) {
  return Object.defineProperty(ReactCompoenent, "getLayout", {
    value: function (page: ReactElement) {
      return <Layout>{page}</Layout>;
    },
    enumerable: false,
    configurable: false,
  });
}
