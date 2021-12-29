import React, { Component } from "react";
import { MainContainer } from "./style";

class Main extends Component {
  render() {
    return <MainContainer> {this.props.children} </MainContainer>;
  }
}

export default Main;
