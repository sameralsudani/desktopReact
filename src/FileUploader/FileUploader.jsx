import { Button, IconButton } from "@mui/material";
import React, { useRef } from "react";
import { MdAttachFile, MdDelete } from "react-icons/md";
import "./FileUploader.css";

function FileUploader(props) {
  const { accept, onSelectFile, onDeleteFile, disabled, files } = props;
  const hiddenFileInput = useRef(null);
  // const [files, setFiles] = useState([]);

  let names = [];
  for (let index = 0; index < files?.length; index++) {
    names.push(files[index].name);
  }

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    // setFiles(event.target.files);
    onSelectFile(event);
  };

  const onDeleteFileHandler = () => {
    // setFiles(null);
    hiddenFileInput.current.value = null;
    onDeleteFile();
  };

  return (
    <div className="file-uploader">
      <div className={`file-div ${disabled && "disabled"}`}>
        <Button
          className="attachment-icon"
          onClick={handleClick}
          disabled={disabled}
        >
          <MdAttachFile />
          <input
            type="file"
            id="actual-btn"
            accept={accept}
            ref={hiddenFileInput}
            onChange={handleChange}
            hidden
            disabled={disabled}
            data-testid="file-upload-input"
            multiple
          />
          <div className="file-name">
            {files?.length > 0 ? (
              <div>{names.join(" , ")}</div>
            ) : (
              <div>Choose file</div>
            )}
          </div>
        </Button>
      </div>
      <div>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={onDeleteFileHandler}
        >
          <MdDelete />
        </IconButton>
      </div>
    </div>
  );
}

export default FileUploader;
