import { Table, Input, Button, Space, Dropdown, Menu, Switch } from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  EditOutlined,
  MenuOutlined,
  EyeOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import ConfirmationModalService from "services/ConfirmationModalService";
import { Link, useHistory } from "react-router-dom";
import ApiService from "services/ApiService";
import IntlMessage from "components/util-components/IntlMessage";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { connect } from "react-redux";

const UserList = (props) => {
  const { localization, locale } = props;
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [currentLang, SetCurrentLang] = useState();
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  let history = useHistory();
  var serviceLangToUSe = "lang/locales/it_IT.json";
  const editUserStatus = (id) => {
    ApiService.Put("Account/editUserStatus", "", id).then((d) =>
      console.log(d)
    );
  };
  const generateNewPassword = (email) => {
    var formData = new FormData();
    formData.append("email", email);
    ConfirmationModalService.ShowModal(
      "Post",
      "Account/forgotPassword",
      null,
      serviceLangToUSe.GenerateNewPassword,
      'Click the "Confirm" button if you want to generate a new password for the user with  ' +
        email +
        "  email",
      formData,
      null,
      serviceLangToUSe.NewPasswordSuccessfullyGenerated
    );
  };
  const viewDetails = (key) => {
    history.push(`/app/account/edit-account/${key}`);
  };
  useEffect(() => {
    if (locale == "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
      SetCurrentLang(locale);
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
      SetCurrentLang(locale);
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
    ApiService.Post("Account/getAllUsers", formData).then((userData) => {
      pagination.total = userData.length;
      const pagination1 = { ...pagination };
      setData(userData);
      setPagination(pagination1);
    });

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
            UserList.searchInput = node;
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
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 115 }}
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
        setTimeout(() => UserList.searchInput.select(), 100);
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
      width: "20%",
      ...getColumnSearchProps("name"),
      sorter: {
        compare: (a, b) => a.name - b.name,
      },
    },
    {
      title: setLocale(localization, "Email"),
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
      sorter: {
        compare: (a, b) => a.email - b.email,
      },
    },
    {
      title: setLocale(localization, "Status"),
      width: "20%",
      key: "status",
      render: (record) => (
        <Space size="middle">
          <Switch
            defaultChecked={record.active}
            onChange={() => editUserStatus(record.email)}
          />
        </Space>
      ),
    },
    {
      title: setLocale(localization, "ChangePassword"),
      key: "changePassword",
      width: "20%",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            onClick={() => generateNewPassword(record.email)}
          >
            {setLocale(localization, "GenerateNewPassword")}
          </Button>
        </Space>
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
                <Menu.Item key={1}>
                  <EyeOutlined />
                  <Link
                    to={`${APP_PREFIX_PATH}/account/view-account/${record.key}`}
                  >
                    {setLocale(localization, "View")}
                  </Link>
                </Menu.Item>
                <Menu.Item key={2}>
                  <EditOutlined />{" "}
                  <Link
                    to={`${APP_PREFIX_PATH}/account/edit-account/${record.key}`}
                  >
                    {setLocale(localization, "Edit")}
                  </Link>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="warning">
              <MenuOutlined /> {setLocale(props, "Actions")} <DownOutlined />
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
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};
export default connect(mapStateToProps)(UserList);
