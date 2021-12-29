import styled from "@emotion/styled";
export const NavigationContainer = styled.nav`
  & ul {
    list-style: none;
    padding: 0px 5px;
    margin: 0px;

    & li {
      margin-top: 5px;
      width: 100%;

      & .nav-btn {
        width: 100%;
        justify-content: flex-start;
        padding-left: 10px;
      }
    }
  }
`;
