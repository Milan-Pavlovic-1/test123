import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { v4 as uuid } from "uuid";
import ApiService from "services/ApiService";
import IntlMessage from "components/util-components/IntlMessage";
const ServiceItems = (props) => {
  const [data, setData] = useState([]);
  const localization = props.localization;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

  const fillOrder = (record) => {
    const tempUUID = uuid();
    const r = {
      offerItemId: tempUUID,
      id: record.id,
      key: tempUUID,
      typeOfService: "1",
      name: record.name,
      price: record.price,
      discount: record.discount,
      finalPrice: record.finalPrice,
      position: "",
      items: [],
    };

    props.setServiceInOffer((prevState) => ({
      offerItems: [...prevState.offerItems, r],
    }));
  };

  const columns = [
    {
      title: setLocale(localization, "Name"),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: setLocale(localization, "Price(€)"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: setLocale(localization, "Discount(%)"),
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: setLocale(localization, "FinalPrice(€)"),
      dataIndex: "finalPrice",
      key: "finalPrice",
    },
    {
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={(e) => fillOrder(record)}
          >
            {setLocale(localization, "AddToOffer")}
          </span>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    ApiService.Get("ServiceItem/Get").then((items) => setData(items));
  }, []);
  return <Table columns={columns} dataSource={data} rowClassName="asd" />;
};

export default ServiceItems;
