import React from "react";
import { Table, Space, Modal } from "antd";
import IntlMessage from "components/util-components/IntlMessage";
import { v4 as uuid } from "uuid";
import { ArrowRightOutlined } from "@ant-design/icons";
const ServiceItems = (props) => {
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

  const warning = () => {
    Modal.warning({
      title: "Warning",
      content: "Item already exist!",
    });
  };
  const fillOrder = (record) => {
    const r = {
      id: record.id,
      key: uuid(),
      name: record.name,
      price: record.price,
    };

    const index = props.items.findIndex((element) => {
      if (element.id === record.id) {
        return true;
      }

      return false;
    });
    if (index !== -1) {
      warning();
    } else {
      props.setItems((prevState) => [...prevState, r]);
    }
  };
  const columns = [
    {
      title: setLocale(props.localization, "Name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: setLocale(props.localization, "Price"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: setLocale(props.localization, "Action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={(e) => fillOrder(record)}
          >
            {setLocale(props.localization, "AddToGroup")} <ArrowRightOutlined />
          </span>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={props.data} />;
};
export default ServiceItems;
