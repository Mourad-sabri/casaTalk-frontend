import styled from "@emotion/styled";

const MainContainer = styled.main`
  height: 100%;
  display: flex;
  width: 100%;
  @media (min-width: 750px) {
    width: calc(100% - 200px);
  }

  & .main-page {
    height: 100%;
    width: 100%;
    @media (min-width: 1050px) {
      width: calc(100% - 350px);
    }
  }

  & .ad-section {
    height: 100%;
    width: 350px;
    display: none;
    @media (min-width: 1050px) {
      display: block;
    }
  }
`;
export { MainContainer };
