import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;

  & .svg-container {
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
`;

function Register(): ReactNode {
  return (
    <Container>
      <div className="svg-container"></div>
      <div className="login-form"></div>
    </Container>
  );
}

export default Register;
