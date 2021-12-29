import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { Button, TextField, Slide } from "@mui/material";
import React from "react";

export const RegisterContainer = styled.div`
  width: 500px;
  min-height: 400px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const LogoContaier = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstNameInput = styled(TextField)`
  width: 49%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const LastNameInput = styled(TextField)`
  width: 49%;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 7px;
  }
`;

export const Email = styled(TextField)`
  margin-top: 7px;
`;

export const Password = styled(TextField)`
  margin-top: 7px;
`;

export const ConfirmPassword = styled(TextField)`
  margin-top: 7px;
`;

export const Age = styled(TextField)`
  margin-top: 7px;
`;

export const NameInputContaner = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0px 7px 10px 7px;
`;

export const RegisterButton = styled(LoadingButton)`
  margin-top: 5px;
`;
