import React, { ReactElement, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

import { LogoContainer, Or, PasswordInput, RegisterButton, SubmitButton } from "../../styles/pages/login";
import { EmailInput, ForgotPassword, Error } from "../../styles/pages/login";
import { FormContainer, LoginCard, LoginContainer } from "../../styles/pages/login";
import { getGlobalState, GlobalAppState } from "../../context/Provider";
import RegisterCard from "../../components/modules/Register/Register";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../graphql/mutation/login";

function Login(props: GlobalAppState): ReactElement {
  const [Login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("please enter valid email address").required("email is required *"),
    password: yup.string().required("you forgot enter your password"),
  });

  useEffect(() => {
    if (!loading && error) setErrorMessage(error.message);
    if (!loading && data) router.push("/");
  }, [data, error, loading]);

  return (
    <LoginContainer>
      <div className="svg-container">
        <img className="img" src="/login-svg.svg" />
      </div>
      <div className="login-form">
        <Formik
          initialValues={initialValues}
          onSubmit={(e) => {
            Login({ variables: { data: { email: e.email, password: e.password } } });
            setErrorMessage(undefined);
          }}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form onSubmit={formik.handleSubmit}>
                <LoginCard>
                  <LogoContainer>
                    <img src="/casaTalk-login-logo.png" alt="casa talk logo" />
                  </LogoContainer>
                  <FormContainer>
                    {errorMessage && <Error> {errorMessage}</Error>}
                    <EmailInput
                      size="small"
                      label="Email"
                      placeholder="Enter your Email or Phone Number ..."
                      variant="filled"
                      color="secondary"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email ? <Error>{formik.errors.email}</Error> : null}
                    <PasswordInput
                      onChange={formik.handleChange}
                      name="password"
                      size="small"
                      label="Password ..."
                      variant="filled"
                      color="secondary"
                      value={formik.values.password}
                    />
                    {formik.touched.password ? <Error>{formik.errors.password}</Error> : null}

                    <ForgotPassword>Forgot password ?</ForgotPassword>
                    <SubmitButton loading={loading} type="submit" color="secondary" variant="contained">
                      Login
                    </SubmitButton>
                    <Or>OR</Or>
                    <RegisterButton
                      onClick={() => props.toggleRegisterDialog!(!props.isRegisterDialogOpen)}
                      color="secondary"
                      variant="contained"
                    >
                      Register
                    </RegisterButton>
                  </FormContainer>
                </LoginCard>
              </Form>
            );
          }}
        </Formik>
      </div>
      <RegisterCard />
    </LoginContainer>
  );
}

export default getGlobalState(Login);
