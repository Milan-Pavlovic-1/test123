import { Table, Input, Button, Space, Dropdown, Menu } from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  MenuOutlined,
  EyeOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import ConfirmationModalService from "services/ConfirmationModalService";
import { useHistory } from "react-router-dom";
import ApiService from "services/ApiService";
import IntlMessage from "components/util-components/IntlMessage";

import { APP_PREFIX_PATH } from "configs/AppConfig";
import { connect } from "react-redux";

const ClientList = ({ localization, locale }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  let history = useHistory();
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  var serviceLangToUSe = "lang/locales/it_IT.json";
  const editClient = (key) => {
    history.push(`${APP_PREFIX_PATH}/clients/edit-client/${key}`);
  };
  const viewDetails = (key) => {
    history.push(`${APP_PREFIX_PATH}/clients/view-client/${key}`);
  };
  useEffect(() => {
    if (locale === "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
    }
  }, [locale]);
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

    ApiService.Post("Client/Sort", formData).then((clientData) => {
      ApiService.Get("Client/Get").then((CountData) => {
        pagination.total = CountData;
      });
      const pagination1 = { ...pagination };
      setData(clientData);
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
            ClientList.searchInput = node;
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
        setTimeout(() => ClientList.searchInput.select(), 100);
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
      dataIndex: "clientName",
      key: "clientName",
      width: "30%",
      ...getColumnSearchProps("clientName"),
      sorter: {
        compare: (a, b) => a.name - b.name,
      },
    },
    {
      title: setLocale(localization, "Email"),
      dataIndex: "email",
      key: "email",
      width: "30%",
      ...getColumnSearchProps("email"),
      sorter: {
        compare: (a, b) => a.email - b.email,
      },
    },
    {
      key: "account",
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={1} onClick={() => viewDetails(record?.id)}>
                  <EyeOutlined /> {setLocale(localization, "View")}
                </Menu.Item>
                <Menu.Item key={2} onClick={() => editClient(record?.id)}>
                  <EditOutlined /> {setLocale(localization, "Edit")}
                </Menu.Item>
                <Menu.Item
                  key={3}
                  onClick={() =>
                    ConfirmationModalService.ShowModal(
                      "Delete",
                      "Client",
                      setData,
                      serviceLangToUSe.DeleteClient,
                      serviceLangToUSe.DoYouWanToDeleteTheClient,
                      null,
                      record.id,
                      serviceLangToUSe.ClientSuccessfullyDeleted
                    )
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
export default connect(mapStateToProps)(ClientList);
