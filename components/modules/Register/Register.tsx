import { Dialog, Slide } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { getGlobalState, GlobalAppState } from "../../../context/Provider";
import Portal from "../../elements/Portal/Portal";
import { LogoContaier, NameInputContaner, Password, RegisterButton, RegisterContainer } from "./style";
import { Age, ConfirmPassword, Email, FirstNameInput, FormContainer, LastNameInput } from "./style";
import * as yup from "yup";
import { Error } from "../../../styles/pages/login";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../../graphql/mutation/register";
import { useRouter } from "next/router";

const Transition = React.forwardRef<any, any>(function (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function RegisterCard(props: GlobalAppState) {
  const [CreateAccount, { loading, data, error }] = useMutation(REGISTER_MUTATION);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const router = useRouter();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    password: "",
    passwordConfirmation: "",
  };

  const schemavalidation = yup.object().shape({
    first_name: yup.string().required("first name is required *"),
    last_name: yup.string().required("last name is required"),
    email: yup.string().email("please enter valid email address").required("email address is required"),
    age: yup.number().integer().required("age is required"),
    password: yup.string().required("password is required").min(7, "password must be more than 7"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match password confirmation"),
  });

  useEffect(() => {
    if (!loading && error) setErrorMessage(error.message);
    if (!loading && data) router.push("/");
  }, [data, loading, error]);

  return (
    <Portal selector="#register">
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={props.isRegisterDialogOpen}
        onClose={() => props.toggleRegisterDialog!(false)}
      >
        <RegisterContainer>
          <LogoContaier>
            <img src="/casaTalk-login-logo.png" alt="casa talk logo" />
          </LogoContaier>
          <FormContainer>
            <Formik
              initialValues={initialValues}
              onSubmit={(e) => {
                CreateAccount({
                  variables: {
                    data: {
                      first_name: e.first_name,
                      last_name: e.last_name,
                      email: e.email,
                      password: e.password,
                      age: e.age,
                    },
                  },
                });
              }}
              validationSchema={schemavalidation}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  {errorMessage && <Error>{errorMessage}</Error>}
                  <NameInputContaner>
                    <FirstNameInput
                      onChange={formik.handleChange}
                      name="first_name"
                      variant="filled"
                      color="secondary"
                      label="First Name *"
                      size="small"
                      value={formik.values.first_name}
                    />

                    <LastNameInput
                      onChange={formik.handleChange}
                      name="last_name"
                      variant="filled"
                      color="secondary"
                      label="Last Name"
                      size="small"
                      value={formik.values.last_name}
                    />
                  </NameInputContaner>
                  {formik.touched.first_name || formik.touched.last_name ? (
                    <Error>{formik.errors.last_name}</Error>
                  ) : null}
                  <Age
                    onChange={formik.handleChange}
                    fullWidth
                    variant="filled"
                    color="secondary"
                    label="Age *"
                    type="number"
                    size="small"
                    name="age"
                    value={formik.values.age}
                  />
                  {formik.touched.age ? <Error>{formik.errors.age}</Error> : null}
                  <Email
                    onChange={formik.handleChange}
                    name="email"
                    value={formik.values.email}
                    fullWidth
                    variant="filled"
                    color="secondary"
                    label="Email *"
                    size="small"
                  />
                  {formik.touched.email ? <Error>{formik.errors.email}</Error> : null}
                  <Password
                    onChange={formik.handleChange}
                    name="password"
                    value={formik.values.password}
                    fullWidth
                    variant="filled"
                    color="secondary"
                    label="Password *"
                    size="small"
                  />
                  {formik.touched.password ? <Error>{formik.errors.password}</Error> : null}
                  <ConfirmPassword
                    onChange={formik.handleChange}
                    name="passwordConfirmation"
                    value={formik.values.passwordConfirmation}
                    fullWidth
                    variant="filled"
                    color="secondary"
                    label="Confirm Password *"
                    size="small"
                  />
                  {formik.touched.passwordConfirmation ? (
                    <Error>{formik.errors.passwordConfirmation}</Error>
                  ) : null}
                  <RegisterButton
                    loading={loading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    Register
                  </RegisterButton>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </RegisterContainer>
      </Dialog>
    </Portal>
  );
}

export default getGlobalState(RegisterCard);
