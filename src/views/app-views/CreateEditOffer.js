import React, { useCallback, useState, useEffect } from "react";
import { Table, Button, Space, Input, InputNumber } from "antd";
import {
  PlusCircleTwoTone,
  MinusCircleTwoTone,
  SearchOutlined,
} from "@ant-design/icons";
import IntlMessage from "components/util-components/IntlMessage";
import Highlighter from "react-highlight-words";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import update from "immutability-helper";

function CreateEditOffer(props) {
  var amountPrice = 0;
  var amountDiscount = 0;
  var amountFinalPrice = 0;

  const { localization, setServiceInOffer, serviceInOffer } = props;

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  serviceInOffer.offerItems?.forEach((element) => {
    amountPrice += parseInt(element.price);
    amountFinalPrice +=
      element.price - parseInt(element.price * (element.discount / 100));
    amountDiscount += parseInt(element.price * (element.discount / 100));
  });

  useEffect(() => {
    serviceInOffer.offerItems?.map((service) => {
      var index = serviceInOffer.offerItems.indexOf(service);
      serviceInOffer.offerItems[index].position = index.toString();
      setServiceInOffer({
        offerItems: serviceInOffer.offerItems,
      });
    });
  }, [serviceInOffer.offerItems]);

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

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
  const removeServiceItem = (record) => {
    var index = serviceInOffer.offerItems.indexOf(record);
    setServiceInOffer({
      offerItems: update(serviceInOffer.offerItems, { $splice: [[index, 1]] }),
    });
  };
  const removeServiceInerItem = (recordItem, recordGroup) => {
    var indexOfGroup = serviceInOffer.offerItems.indexOf(recordGroup);
    var indexOfItemInGroup =
      serviceInOffer.offerItems[indexOfGroup].items.indexOf(recordItem);

    var lista = update(serviceInOffer.offerItems[indexOfGroup].items, {
      $splice: [[indexOfItemInGroup, 1]],
    });
    serviceInOffer.offerItems[indexOfGroup].items = lista;
    serviceInOffer.offerItems[indexOfGroup].price =
      parseInt(serviceInOffer.offerItems[indexOfGroup].price) -
      parseInt(recordItem.price);

    setServiceInOffer({
      offerItems: serviceInOffer.offerItems,
    });
    changeDiscount(recordGroup, recordGroup.discount);
    if (recordGroup.items.length === 0) {
      removeServiceItem(recordGroup);
    }
  };
  const changeDiscount = (record, value) => {
    var index = serviceInOffer.offerItems.indexOf(record);
    if (value === null) value = 0;
    setServiceInOffer({
      offerItems: update(serviceInOffer.offerItems, {
        [index]: {
          discount: { $set: value.toString() },
          finalPrice: { $set: record.price - record.price * (value / 100) },
        },
      }),
    });
  };
  const showItemsGroup = (recordGroup) => {
    const columnsForItems = [
      {
        title: setLocale(localization, "ServiceItem"),
        dataIndex: "name",
        key: "name",
        width: "26%",
      },
      {
        title: setLocale(localization, "PriceItem"),
        dataIndex: "price",
        key: "price",
        width: "64%",
      },
      {
        title: setLocale(localization, "Action"),
        key: "operation",

        render: (recordItem) => (
          <a onClick={() => removeServiceInerItem(recordItem, recordGroup)}>
            {setLocale(localization, "Delete")}
          </a>
        ),
      },
    ];

    return (
      <Table
        columns={columnsForItems}
        dataSource={recordGroup.items}
        pagination={false}
      />
    );
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
      key: "price",
    },
    {
      title: setLocale(localization, "Discount(%)"),
      dataIndex: ["discount"],
      key: "discount",
      render: (discount, record) => (
        <InputNumber
          min={0}
          max={100}
          defaultValue={discount}
          onChange={(value) => changeDiscount(record, value)}
        />
      ),
    },
    {
      title: setLocale(localization, "FinalPrice(€)"),
      dataIndex: "finalPrice",
      key: "finalPrice",
    },
    {
      title: setLocale(localization, "Action"),
      key: "operation",
      width: "10%",
      render: (record) => (
        <a onClick={() => removeServiceItem(record)}>
          {setLocale(localization, "Delete")}
        </a>
      ),
    },
  ];

  const components = {
    body: {
      row: props.DraggableBodyRow,
    },
  };
  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = serviceInOffer.offerItems[dragIndex];
      setServiceInOffer({
        offerItems: update(serviceInOffer.offerItems, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      });
    },
    [serviceInOffer.offerItems]
  );

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Table
          className="bmsTableOffer"
          components={components}
          onRow={(_, index) => {
            const attr = {
              index,
              moveRow,
            };
            return attr;
          }}
          columns={columns}
          rowKey={(record) => record.offerItemId}
          expandable={{
            expandedRowRender: (recordGroup) => showItemsGroup(recordGroup),

            expandIcon: ({ expanded, onExpand, record }) =>
              record.typeOfService === "0" ? (
                expanded ? (
                  <MinusCircleTwoTone onClick={(e) => onExpand(record, e)} />
                ) : (
                  <PlusCircleTwoTone onClick={(e) => onExpand(record, e)} />
                )
              ) : null,
            rowExpandable: (record) => record.typeOfService !== "1",
          }}
          dataSource={serviceInOffer.offerItems}
        />
      </DndProvider>
      <div style={{ border: "1px ridge #3e79f7", padding: "2%" }}>
        <h4>{setLocale(localization, "AmountPrice")}:</h4> {amountPrice} €
        <h4>{setLocale(localization, "AmountDiscount")}:</h4>{" "}
        {amountDiscount !== 0 && <span>-</span>}
        {amountDiscount} €
        <h4>{setLocale(localization, "AmountFinalPrice")}:</h4>
        {amountFinalPrice} €
      </div>
    </div>
  );
}

export default CreateEditOffer;
