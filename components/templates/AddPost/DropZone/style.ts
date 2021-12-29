import styled from "@emotion/styled";

export const PostDropZoneContainer = styled.div<any>`
  width: 100%;
  min-height: 200px;
  border: ${(p) => (!p.isSelected ? "1px dotted black" : null)};
  border-radius: 10px;

  & .dropzone {
    padding: 3px;
    padding-left: 22px;
    & p {
      text-transform: capitalize;
      width: 100%;
      justify-content: center;
      height: 150px;
      display: flex;
      align-items: center;
    }
  }
  & .img {
    border-radius: 10px;
  }
`;
