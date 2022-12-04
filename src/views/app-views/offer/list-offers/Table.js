import {
  Table,
  Input,
  Button,
  Space,
  Dropdown,
  Menu,
  Tag,
  Modal,
  Select,
  message,
} from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  EditOutlined,
  MenuOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import ApiService from "services/ApiService";
import IntlMessage from "components/util-components/IntlMessage";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { connect } from "react-redux";
import ClientDetailsModal from "views/app-views/client/view-client/ClientDetailsModal";
import moment from "moment";
var serviceLangToUSe = "lang/locales/it_IT.json";
const { Option } = Select;
const { warning } = Modal;
const { success, error } = message;
const OffersList = (props) => {
  const [data, setData] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentStatusId, setCurrentStatusId] = useState();
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  let history = useHistory();
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

  const editOffer = (key) => {
    history.push(`${APP_PREFIX_PATH}/offer/edit-offer/${key}`);
  };
  const viewDetails = (key) => {
    history.push(`${APP_PREFIX_PATH}/offer/view-offer/${key}`);
  };
  const showAllContracts = (key) => {
    history.push(`${APP_PREFIX_PATH}/contract/list-contractsByOffer/${key}`);
  };
  useEffect(() => {
    if (props.locale === "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
    }
  }, [props.locale]);
  useEffect(() => {
    fetch();
  }, []);
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
  function fetch(paramss = {}) {
    setLoading(true);
    var formData = new FormData();
    formData.append("sortField", paramss.sortField);
    formData.append("sortOrder", paramss.sortOrder);

    ApiService.Post("Offer/Sort", formData).then((offers) => {
      switch (props.locationOfView) {
        case "byClient":
          var d = offers.filter((offer) => {
            return offer.clientId === parseInt(props.clientId);
          });
          setData(d);
          break;
        default:
          setData(offers);
          break;
      }
      pagination.total = offers.length;
      const pagination1 = { ...pagination };
      setPagination(pagination1);
    });
    ApiService.Get("Offer/GetAllStatuses").then((d) => {
      setStatuses(d);
    });
    setLoading(false);
  }
  const changeOfferStatus = (e, record) => {
    if (currentStatusId > e) {
      warning(serviceLangToUSe.CanotRestoreStatus);
    } else {
      var formData = new FormData();
      formData.append("id", e);
      ApiService.Put("Offer/EditOfferStatus", formData, record.id).then((d) => {
        if (d === true) {
          success("Status has been successfuly changed!");
          setTimeout(() => {
            fetch();
          }, 1200);
        } else {
          error("Error occured!");
        }
      });
      setCurrentStatusId(e);
    }
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
            OffersList.searchInput = node;
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
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
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
        setTimeout(() => OffersList.searchInput.select(), 100);
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
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const columns = [
    {
      title: setLocale(props.localization, "Name"),
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      sorter: {
        compare: (a, b) => a.title - b.title,
      },
    },
    {
      title: setLocale(props.localization, "ClientName"),
      dataIndex: ["clientName"],
      key: "clientName",
      ...getColumnSearchProps("clientName"),
      sorter: {
        compare: (a, b) => a.client - b.client,
      },
      render: (clientName, record) => (
        <ClientDetailsModal localization={true} client={record} />
      ),
    },
    {
      title: setLocale(props.localization, "AmountPrice "),
      dataIndex: "amountPrice",
      key: "amountPrice",
      ...getColumnSearchProps("amountPrice"),
      sorter: {
        compare: (a, b) => a.amountPrice - b.amountPrice,
      },
    },
    {
      title: setLocale(props.localization, "CreationDate"),
      dataIndex: "dateOfCreation",
      key: "dateOfCreation",
      ...getColumnSearchProps("dateOfCreation"),
      sorter: {
        compare: (a, b) => a.dateOfCreation - b.dateOfCreation,
      },
      render: (record) => moment(record).format("DD/MM/YYYY"),
    },
    {
      title: setLocale(props.localization, "ResponsiblePerson"),
      dataIndex: "responsiblePerson",
      key: "responsiblePerson",
      ...getColumnSearchProps("responsiblePerson"),
      sorter: {
        compare: (a, b) => a.responsiblePerson - b.responsiblePerson,
      },
    },
    {
      title: setLocale(props.localization, "Status"),
      dataIndex: ["status"],
      key: "status",

      width: "14%",
      render: (status, record) => (
        <Select
          disabled={
            status === "Accepted" || status === "Rejected" ? true : false
          }
          onClick={() => setCurrentStatusId(record.statusId)}
          onChange={(e) => changeOfferStatus(e, record)}
          defaultValue={
            <Tag
              icon={
                status === "InProgress" ? (
                  <SyncOutlined spin />
                ) : status === "Accepted" ? (
                  <CheckCircleOutlined />
                ) : status === "Rejected" ? (
                  <CloseCircleOutlined />
                ) : null
              }
              color={
                status === "Accepted"
                  ? "success"
                  : status === "InProgress"
                  ? "processing"
                  : status === "Rejected"
                  ? "error"
                  : "default"
              }
            >
              {status}
            </Tag>
          }
        >
          {statuses.map((status) => (
            <Option value={status.id}>
              <Tag
                icon={
                  status.title === "InProgress" ? (
                    <SyncOutlined spin />
                  ) : status.title === "Accepted" ? (
                    <CheckCircleOutlined />
                  ) : status.title === "Rejected" ? (
                    <CloseCircleOutlined />
                  ) : null
                }
                color={
                  status.title === "Accepted"
                    ? "success"
                    : status.title === "InProgress"
                    ? "processing"
                    : status.title === "Rejected"
                    ? "error"
                    : "default"
                }
              >
                {status.title}
              </Tag>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      key: "account",
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={1} onClick={() => viewDetails(record?.id)}>
                  <EyeOutlined /> {setLocale(props.localization, "View")}
                </Menu.Item>
                <Menu.Item
                  disabled={
                    record?.status === "Accepted" ||
                    record?.status === "Rejected"
                      ? true
                      : false
                  }
                  key={2}
                  onClick={() => editOffer(record?.id)}
                >
                  <EditOutlined /> {setLocale(props.localization, "Edit")}
                </Menu.Item>
                <Menu.Item key={3} onClick={() => showAllContracts(record?.id)}>
                  <FileTextOutlined />{" "}
                  {setLocale(props.localization, "Contracts")}
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="warning">
              <MenuOutlined /> {setLocale(props.localization, "Actions")}
              <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pagination, pageSize: 15 }}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};
export default connect(mapStateToProps)(OffersList);
