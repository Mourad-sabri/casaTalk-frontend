import styled from "@emotion/styled";
export const ChatInputContainer = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;

  .avatar {
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-container {
    width: calc(100% - 100px);
  }

  .input {
    padding: 3px 5px;
  }
`;
