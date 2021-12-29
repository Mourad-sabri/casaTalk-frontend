import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { Button, Card, Divider, TextField } from "@mui/material";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  & .svg-container {
    width: calc(100% - 500px);
    height: 100%;

    @media (max-width: 1150px) {
      display: none;
    }

    & .img {
      width: 600px;
      height: 600px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .login-form {
    width: 500px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1150px) {
      width: 100%;
    }

    @media (max-width: 500px) {
      padding: 0px 5px;
    }
  }
`;

export const LoginCard = styled(Card)`
  width: 400px;
  min-height: 360px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  min-height: 300px;

  padding: 10px 10px 10px 10px;
`;

export const EmailInput = styled(TextField)`
  width: 100%;
`;

export const PasswordInput = styled(TextField)`
  width: 100%;
  margin-top: 10px;
`;

export const SubmitButton = styled(LoadingButton)`
  width: 100%;
  margin-top: 5px;
`;

export const ForgotPassword = styled.a`
  font-size: 13px;
  margin-top: 3px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Or = styled(Divider)`
  width: 100%;
  margin-top: 10px;
`;

export const RegisterButton = styled(Button)`
  width: 100%;
  margin-top: 5px;
`;

export const Error = styled.div`
  color: red;
`;
