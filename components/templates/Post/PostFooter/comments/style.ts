import styled from "@emotion/styled";
export const CommentContainer = styled.div`
  min-height: 30px;
  width: 100%;
  display: flex;

  .avatar {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .comment-content {
    width: calc(100% - 50px);
    min-height: 10px;
    padding: 5px;
  }
  .btns {
  }
  .replies {
    min-height: 10px;
    display: flex;
    background-color: #f1f1e6;
    margin-top: 3px;
    border-radius: 10px;
    padding: 3px;
    & .reply-content {
      display: flex;
      & div {
        width: calc(100% - 30px);
      }
    }
  }
`;
