import { Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PostDropZoneContainer } from "./style";

interface PostDropZoneProps {
  onChange: (file: any) => void;
  display: boolean;
}

const PostDropZone = (props: PostDropZoneProps) => {
  const { onChange, display = false } = props;
  const [files, setFiles] = useState<any>([]);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  onChange(files);

  return (
    <React.Fragment>
      {display && (
        <PostDropZoneContainer isSelected={files.length > 0 ? true : false} {...getRootProps()}>
          <div className="dropzone">
            <input {...getInputProps()} />
            {files.length > 0 ? (
              <Image className="img" src={files[0].preview} width={120} height={40} layout="responsive" />
            ) : (
              <p> drop Image here, or click to select files</p>
            )}
          </div>
        </PostDropZoneContainer>
      )}
    </React.Fragment>
  );
};

export default PostDropZone;
