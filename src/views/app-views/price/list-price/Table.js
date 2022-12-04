import { Table, Input, Button, Space, Dropdown, Menu } from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  EditOutlined,
  MenuOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import ApiService from "services/ApiService";
import IntlMessage from "components/util-components/IntlMessage";
import { APP_PREFIX_PATH } from "configs/AppConfig";

import ConfirmationModalService from "services/ConfirmationModalService";

const PriceList = ({ localization }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  let history = useHistory();
  console.log(data);
  const viewDetails = (key) => {
    history.push(`/app/price/edit-price/${key}`);
  };
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

    ApiService.Post("ServiceItem/Sort", formData).then((clientData) => {
      ApiService.Get("ServiceItem/Get").then((CountData) => {
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
            PriceList.searchInput = node;
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
        setTimeout(() => PriceList.searchInput.select(), 100);
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
      title: setLocale(localization, "Description"),
      dataIndex: "description",
      key: "description",
      width: "20%",
      ...getColumnSearchProps("description"),
      sorter: {
        compare: (a, b) => a.description - b.description,
      },
    },
    {
      title: setLocale(localization, "Price"),
      dataIndex: "price",
      key: "price",
      width: "20%",
      ...getColumnSearchProps("price"),
      sorter: {
        compare: (a, b) => a.price - b.price,
      },
    },
    {
      title: setLocale(localization, "Discount"),
      dataIndex: "discount",
      key: "discount",
      width: "20%",
      ...getColumnSearchProps("discount"),
      sorter: {
        compare: (a, b) => a.discount - b.discount,
      },
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
                  <EyeOutlined />
                  <Link
                    to={`${APP_PREFIX_PATH}/price/view-price/${record?.id}`}
                  >
                    {setLocale(localization, "View")}
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <EditOutlined />
                  <Link
                    to={`${APP_PREFIX_PATH}/price/edit-price/${record?.id}`}
                  >
                    {setLocale(localization, "Edit")}
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key={3}
                  onClick={() =>
                    ConfirmationModalService.ShowModal(
                      "Delete",
                      "ServiceItem",
                      setData,
                      "Delete client",
                      "Do you want to delete the client?",
                      null,
                      record.id,
                      "Service item has been successfully deleted!"
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
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
export default PriceList;
