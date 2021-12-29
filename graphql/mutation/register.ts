import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation CreateAccount($data: CreateAccountInput!) {
    createAccount(data: $data)
  }
`;
