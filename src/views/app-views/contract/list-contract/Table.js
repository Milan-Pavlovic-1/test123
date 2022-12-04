import {
  Table,
  Input,
  Button,
  Space,
  Dropdown,
  Menu,
  Tag,
  Select,
  Modal,
  message,
} from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  EditOutlined,
  MenuOutlined,
  EyeOutlined,
  DeleteOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ApiService from "services/ApiService";
import IntlMessage from "components/util-components/IntlMessage";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import moment from "moment";
import ConfirmationModalService from "services/ConfirmationModalService";
import { Option } from "antd/lib/mentions";
import { connect } from "react-redux";

const ContractList = ({
  locale,
  localization,
  locationOfView,
  clientId,
  offerId,
}) => {
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({});
    const [statuses, setStatuses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const [contracts, setContracts] = useState([]);
    const [changedName, setChangedName] = useState();
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [changedContractId, setChangedContractId] = useState();
    const setLocale = (isLocaleOn, localeKey) =>
        isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
    var serviceLangToUSe = "lang/locales/it_IT.json";
    const { confirm, warning, success, error } = Modal;

    useEffect(() => {
        fetch();
    }, []);
    useEffect(() => {
        if (locale === "en") {
            serviceLangToUSe = require("lang/locales/en_US.json");
        } else {
            serviceLangToUSe = require("lang/locales/it_IT.json");
        }
    }, [locale]);
    const deleteContract = (id) => {
        confirm({
            title: serviceLangToUSe.DeleteContract,
            content: serviceLangToUSe.DoYouWantToDeleteTheContract,
            okText: serviceLangToUSe.Yes,
            okType: 'danger',
            cancelText: serviceLangToUSe.No,
            onOk() {
                ApiService.Delete("Contract/Delete", id).then((data) => {
                    data === true ? message.success(serviceLangToUSe.ContractHasBeenSuccessfullyDeleted) : message.error(serviceLangToUSe.ErrorOccured)
                    setTimeout(() => {
                        fetch();
                    }, 700);
                })
            }
        })
    }
    const changeName = (record, newName) => {
        setShowSaveButton(true);
        setChangedContractId(record.id)
        setChangedName(newName)
    }
    const saveChangedName = () => {
        var formData = new FormData();
        formData.append("name", changedName);
        ApiService.Put("Contract/EditContractName", formData, changedContractId).then((data) => {
            if (data === true) {
                message.success("Contracts name has been successfuly changed!")
                setTimeout(() => {
                    fetch();
                    setShowSaveButton(false)
                }, 1000)
            }
            else {
                message.error("Error occured!")
            }
        })
    }
    const changeContractStatus = (e, record) => {
        var formData = new FormData();
        formData.append("id", e);
        ApiService.Put("Contract/EditContractStatus", formData, record.id).then(
            (d) => {
                if (d === true) {
                    message.success("Status has been successfuly changed!");
                    setTimeout(() => {
                        fetch();
                    }, 1200);
                } else {
                    message.error("Error occured!");
                }
            }
        );
    };
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

        switch (locationOfView) {
            case "byClient":
                formData.append("filter", "Client");
                ApiService.Put("Contract/GetContractByFilter", formData, clientId).then(
                    (contracts) => {
                        setContracts(contracts);
                        pagination.total = contracts.length;
                    }
                );
                break;
            case "byOffer":
                formData.append("filter", "Offer");
                ApiService.Put("Contract/GetContractByFilter", formData, offerId).then(
                    (contracts) => {
                        setContracts(contracts);
                        pagination.total = contracts.length;
                    }
                );
                break;
            default:
                ApiService.Post("Contract/Sort", formData).then((contracts) => {
                    setContracts(contracts);
                    pagination.total = contracts.length;
                });
                break;
        }

        ApiService.Get("Contract/GetAllStatuses").then((data) => setStatuses(data));

    setLoading(false);
  }
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
            ContractList.searchInput = node;
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
            style={{ width: 115 }}
          >
            {setLocale(localization, "Search")}
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 115 }}
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
        setTimeout(() => ContractList.searchInput.select(), 100);
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
            title: setLocale(localization, "Name"),
            dataIndex: "name",
            key: "name",
            width: "25%",
            ...getColumnSearchProps("name"),
            sorter: {
                compare: (a, b) => a.name - b.name,
            },
            render: (name, record) => <Input disabled={record.status === "Accepted" ? true : false} onChange={(e) => changeName(record, e.target.value)} defaultValue={name} />
        },
        {
            title: setLocale(localization, "DateOfCreation"),
            dataIndex: "dateOfCreation",
            key: "dateOfCreation",
            width: "20%",
            ...getColumnSearchProps("dateOfCreation"),
            sorter: {
                compare: (a, b) => a.dateOfCreation - b.dateOfCreation,
            },
            render: (record) => moment(record).format("DD/MM/YYYY"),
        },
        {
            title: setLocale(localization, "ResposiblePerson"),
            dataIndex: "responsiblePerson",
            key: "responsiblePerson",
            width: "20%",
            ...getColumnSearchProps("responsiblePerson"),
            sorter: {
                compare: (a, b) => a.responsiblePerson - b.responsiblePerson,
            },
        },
        {
            title: setLocale(localization, "Status"),
            dataIndex: ["status"],
            key: "status",
            width: "20%",
            render: (status, record) => (
                <Select
                    disabled={status === "Accepted" ? true : false}
                    onChange={(e) => changeContractStatus(e, record)}
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
                            {setLocale(localization, status)}
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
            width: "20%",
            render: (record) => (
                <Space size="middle">
                    <Dropdown
                        overlay={
                            <Menu>
                                <Menu.Item>
                                    <EyeOutlined /> <Link
                                        to={`${APP_PREFIX_PATH}/group/view-group/${record?.id}`}
                                    >
                                        {setLocale(localization, "View")}
                                    </Link>
                                </Menu.Item>
                                <Menu.Item
                                    disabled={record.status === "Accepted" ? true : false}
                                    key={3}
                                    onClick={() => deleteContract(record.id)
                                    }
                                >
                                    <DeleteOutlined /> {setLocale(localization, "Delete")}
                                </Menu.Item>
                            </Menu>
                        }
                    >
                        <Button type="warning">
                            <MenuOutlined /> {setLocale(localization, "Actions")}
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                    {changedContractId === record.id && <Button type="primary" hidden={!showSaveButton} onClick={() => saveChangedName()}>Save change</Button>}
                </Space>
            ),
        },
    ];
    return (
        <Table
            columns={columns}
            dataSource={contracts}
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
export default connect(mapStateToProps)(ContractList);
