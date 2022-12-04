import {
  Table,
  Input,
  Button,
  Space,
  Dropdown,
  Menu,
  Tag,
  Tooltip,
  message,
  Modal,
  Col,
  Row,
} from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  CloudDownloadOutlined,
  MenuOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import IntlMessage from "components/util-components/IntlMessage";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import ApiService from "services/ApiService";
import moment from "moment";
import UploadDocument from "./UploadDocument";

const CurrentDocument = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [showURL, setShowURL] = useState(false);
  const [URL, setURL] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [documentsData, setDocumentsData] = useState([]);
  const [pagination, setPagination] = useState({});

  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const localization = props.localization;
  const { confirm } = Modal;
  let history = useHistory();
  useEffect(()=>{
    fetch();
  },[])
  const fetch = (paramss = {}) => {
    var formData = new FormData();
    formData.append("sortField", paramss.sortField);
    formData.append("sortOrder", paramss.sortOrder);
    ApiService.Put("Document/GetDocumentByClientId", formData, props.id).then((docs) => {
      setDocumentsData(docs)
    })
  }
  const generateLink = () => {
    ApiService.Get(`Document/GenerateLink/${props.id}`).then((d) => setURL(d));
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            CurrentDocument.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            {setLocale(localization, "Search")}
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            {setLocale(localization, "Reset")}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => CurrentDocument.searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...pagination };
    pager.current = pagination.current;
    setPagination({
      pagination: pager,
    });
    fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const showInput = () => {
    generateLink();
    setShowURL(true)
  }
  const uploadDocument = () => {
    setShowUpload(!showUpload)
    setShowURL(false)
    generateLink();
  }
  const deleteDocument = (documentId) => {
    confirm({
      title: "Delete document",
      content: "Do you want to delete the document?",
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        ApiService.Delete("Document/Delete", documentId).then((isDelete) => {
          if (isDelete === true) {
            fetch()
            message.success("Document has been successfully deleted!")
          } else {
            message.error("Error occured!")
          }
        })
      }
    })
  }
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const columns = [
    {
      title: setLocale(localization, "Name"),
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
      sorter: {
        compare: (a, b) => a.name - b.name,
      },
    },
    {
      title: setLocale(localization, "DateOfCreation"),
      dataIndex: "dateOfCreation",
      key: "dateOfCreation",
      width: "30%",
      ...getColumnSearchProps("dateOfCreation"),
      sorter: {
        compare: (a, b) => a.date - b.date,
      },
      render: record => moment(record).format("DD/MM/YYYY")
    },
    {
      title: setLocale(localization, "Responsible person"),
      dataIndex: "responsiblePerson",
      key: "responsiblePerson",
      width: "30%",
      ...getColumnSearchProps("responsiblePerson"),
      sorter: {
        compare: (a, b) => a.responsiblePerson - b.responsiblePerson,
      },
    },

    {
      title: setLocale(localization, "Type"),
      dataIndex: "extension",
      key: "extension",
      render: (text) =>
        text === "pdf" ? (
          <Tag color="#F40F02">
            <FilePdfOutlined style={{ fontSize: "100%" }} /> PDF
          </Tag>
        ) : text === "docx" ? (
          <Tag color="#0000ff">
            <FileWordOutlined style={{ fontSize: "100%" }} /> docx
          </Tag>
        ) : (
          text === "xlsx" && (
            <Tag color="#008000 ">
              <FileExcelOutlined style={{ fontSize: "100%" }} /> excel
            </Tag>
          )
        ),
    },
    {
      key: "account",
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <CloudDownloadOutlined className="mx-2"/>
                  <Link to={`/documents/Client_${record.clientId}/${record.name}`} target="_blank" download>{setLocale(localization, "Download")}</Link>
                </Menu.Item>
                <Menu.Item onClick={() => deleteDocument(record.id)}>
                  <DeleteOutlined className="mx-2"/> 
                  {setLocale(localization, "Delete")}
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="warning">
              <MenuOutlined className="mx-2"/> 
              {setLocale(localization, "Actions")}
              <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ marginBottom: 100 }}>

      <Table
        columns={columns}
        dataSource={documentsData}
        pagination={pagination}
        loading={props.loading2}
        onChange={handleTableChange}
      />
      <div
        style={{
          display: "flex",
        }}
      >
          <Button type="primary" onClick={() => uploadDocument()}>
            Upload Documents
          </Button>
          {showUpload && (
            <div
              style={{
                margin: "auto",
                maxWidth: "700px",
              }}
            >
              <UploadDocument URL={URL} mode="byUser" />
            </div>
          )}
          <Button
            onClick={showInput}
            style={{ marginRight: 20 }}
            type="primary"
            className="mx-2"
          >
            Generate Link
          </Button>
          
          {URL.length > 0 && showURL === true && (
            <Input.Group compact>
              <Input
                style={{
                  width: "calc(100% - 600px)",
                }}
                defaultValue={URL}
                disabled
              />
              <Tooltip title="Copy to clipboard">
                <Button
                  icon={<CopyOutlined />}
                  onClick={() => {
                    navigator.clipboard.writeText(URL);
                  }}
                />
              </Tooltip>
            </Input.Group>
          )}
      </div>
    </div>
  );
};
export default CurrentDocument;
