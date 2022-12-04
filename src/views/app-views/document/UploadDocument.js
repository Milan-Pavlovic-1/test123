import { InboxOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { withInfo } from "antd/lib/modal/confirm";
import StatusCode from "configs/StatusCode";
import { findLastIndex, lastIndexOf } from "lodash";
import { useState } from "react";
import ApiService from "services/ApiService";
const { Dragger } = Upload;
var token = "";
function UploadDocument(props) {
  if(props.mode !== "byUser"){
     token = props.match.params.key;
  }
  else{
    var indexOfLastSlash = props.URL.lastIndexOf('/');
    token = props.URL.substring(indexOfLastSlash + 1)
  }
  const [selectedDocuments, setSelectedDocuments] = useState([]);
 
  const property = {
    name: "file",
    action: "",
    listType: "picture",
    multiple: true,
    maxCount: 3, //number of files
    accept: [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ],
    beforeUpload(file) {

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error(`File must be smaller than 2M.`);
      }
      return isLt2M || Upload.LIST_IGNORE;
    },

    customRequest(e) {
      e.onSuccess();
    },

    onChange(info) {
      setSelectedDocuments(info.fileList);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    }
  };
  const uploadSelectedDocument = () => {

    var formData = new FormData();
    formData.append("token", token);

    selectedDocuments.map((document) => {
      formData.append("documents", document.originFileObj)
    })

    ApiService.Post("Document/Insert", formData).then((data) => {
      data === StatusCode.Successfully ? message.success(`Document uploaded successfully!`)
        : message.error(`Document upload failed.`)
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    })
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 50,
        margin: 20,
      }}
    >
      {<h1>Upload Document</h1>}
      <Dragger {...property}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
      <Button disabled={selectedDocuments.length === 0} type="primary" onClick={() => uploadSelectedDocument()}>Submit</Button>
    </div>
  )
}
export default UploadDocument;
