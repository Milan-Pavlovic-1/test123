import React, { useEffect, useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import IntlMessage from "components/util-components/IntlMessage";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
import ApiService from "services/ApiService";

function ServiceGroups(props) {
  const localization = props.localization;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setdata] = useState([]);
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  useEffect(() => {
    ApiService.Get("ServiceGroup/Get").then((groups) => setdata(groups));
  }, []);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            {setLocale(localization, "Filter")}
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
      /* if (visible) {
                setTimeout(() => UserList.searchInput.select(), 100);
            } */
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
  const showItemsGroup = (record, index, indent, expanded) => {
    const columns = [
      {
        title: setLocale(localization, "ServiceItem"),
        dataIndex: "name",
        key: "name",
        width: "22%",
      },
      {
        title: setLocale(localization, "PricePerItem(€)"),
        dataIndex: "price",
        key: "price",
      },
    ];

    return (
      <Table columns={columns} dataSource={record.items} pagination={false} />
    );
  };

  const fillOrder = (record) => {
    const tempUUID = uuid();
    const r = {
      offerItemId: tempUUID,
      id: record.id,
      key: tempUUID,
      typeOfService: "0",
      name: record.name,
      price: record.price,
      discount: record.discount,
      finalPrice: record.finalPrice,
      position: "",
      items: record.items,
    };

    props.setServiceInOffer((prevState) => ({
      offerItems: [...prevState.offerItems, r],
    }));
  };

  const columns = [
    {
      title: setLocale(localization, "GroupName"),
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: setLocale(localization, "Price(€)"),
      dataIndex: "price",
      key: "amountPrice",
    },
    {
      title: setLocale(localization, "Discount(%)"),
      dataIndex: "discount",
      key: "amountDiscount",
    },
    {
      title: setLocale(localization, "FinalPrice(€)"),
      dataIndex: "finalPrice",
      key: "finalPrice",
    },
    {
      title: setLocale(localization, "Action"),
      key: "operation",
      render: (record) => (
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={(e) => fillOrder(record)}
        >
          {setLocale(localization, "AddToOffer")}
        </span>
      ),
    },
  ];

  return (
    <div className="m-2">
      <div></div>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        rowKey={(record) => record.id}
        expandable={{
          expandedRowRender: (record, index, indent, expanded) =>
            showItemsGroup(record, index, indent, expanded),
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <MinusCircleTwoTone onClick={(e) => onExpand(record)} />
            ) : (
              <PlusCircleTwoTone onClick={(e) => onExpand(record)} />
            ),
        }}
        dataSource={data}
      />
    </div>
  );
}

export default ServiceGroups;
