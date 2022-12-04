import { Table, Input, Button, Space, Dropdown, Menu } from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  MenuOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import ConfirmationModalService from "services/ConfirmationModalService";
import { useHistory } from "react-router-dom";

function _Table(props) {
  let history = useHistory();

  const initialColumnItems = [
    {
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <EyeOutlined /> View
                </Menu.Item>
                <Menu.Item onClick={() => viewDetails(record.idActivity)}>
                  <EditOutlined /> Edit
                </Menu.Item>
                <Menu.Item
                  onClick={() =>
                    ConfirmationModalService.ShowModal(
                      "Delete",
                      "Activity",
                      props.setResultData,
                      "Delete activities",
                      "Do you want to delete the activity?",
                      null,
                      record.idActivity
                    )
                  }
                >
                  {" "}
                  <DeleteOutlined /> Delete
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="warning">
              <MenuOutlined /> Actions <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const viewDetails = (row) => {
    history.push(`/account/edit-account/${row}`);
  };

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [columnItems, setColumnItems] = useState(initialColumnItems);

  function handleAdd(item) {
    setColumnItems((prevState) => {
      return [...item, ...prevState];
    });
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
            _Table.searchInput = node;
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
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
        setTimeout(() => _Table.searchInput.select(), 100);
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

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  useEffect(() => {
    const listItems = props.columns.map((item) => ({
      title: item.name,
      dataIndex: item.name,
      key: item.name,
      width: "30%",
      ...getColumnSearchProps(item.name),
      sorter:
        item.sorter === "number"
          ? (a, b) => a[item.name] - b[item.name]
          : (a, b) => a[item.name] - b[item.name],
    }));
    handleAdd(listItems);
  }, []);

  return (
    <Table
      columns={columnItems}
      dataSource={props.data}
      pagination={{ pageSize: 3 }}
      scroll={{ y: 240 }}
    />
  );
}

export default _Table;
