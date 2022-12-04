import React, { forwardRef } from "react";
import { Card, Table } from "antd";
import IntlMessage from "components/util-components/IntlMessage";
import NumberFormat from "react-number-format";
import moment from "moment";
const ThirdStep = forwardRef((props, ref) => {
  const localization = props.localization;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  var amountPrice = 0;
  var amountDiscount = 0;
  var amountFinalPrice = 0;
  props.serviceInOffer.offerItems.forEach((element) => {
    amountPrice += parseInt(element.price);
    amountFinalPrice +=
      element.price - parseInt(element.price * (element.discount / 100));
    amountDiscount += parseInt(element.price * (element.discount / 100));
  });
  var date = moment(new Date().toJSON().slice(0, 10).replace(/-/g, "/")).format(
    "DD/MM/YYYY"
  );
  const columns = [
    {
      title: setLocale(localization, "ServiceName"),
      dataIndex: "name",
      key: "name",
      width: "25%",
    },
    {
      title: setLocale(localization, "Price(€)"),
      dataIndex: "price",
      key: "amountPrice",
      width: "25%",
    },
    {
      title: setLocale(localization, "Discount(%)"),
      dataIndex: ["discount"],
      key: "discount",
      width: "25%",
    },
    {
      title: setLocale(localization, "FinalPrice(€)"),
      dataIndex: "finalPrice",
      key: "finalPrice",
      width: "25%",
    },
  ];
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
    ];

    return (
      <Table
        columns={columnsForItems}
        dataSource={recordGroup.items}
        pagination={false}
        className="second-table"
        rowClassName={() => "rowClassName2"}
      />
    );
  };
  return (
    <div ref={ref} className="container">
      <Card style={{ border: "none" }}>
        <div className="d-md-flex justify-content-md-between">
          <div>
            <img src="/img/TIPASLogo.png" width={"200"} alt="" />
            <address>
              <p>
                <span className="font-weight-semibold text-dark font-size-md">
                  T.I.P.A.S.
                </span>
                <br />
                <span>FRAZIONE PIANI 84 CASTIGLIONE</span>
                <br />
                <span>MESSER RAIMONDO, TERAMO, 64034 Italy</span>
                <br />
                <abbr className="text-dark" title="Phone">
                  {setLocale(localization, "Phone")}:
                </abbr>
                <span> (02) 89450402</span>
              </p>
            </address>
          </div>
          <div className="mt-3 text-right">
            <address>
              <p>
                <span className="font-weight-semibold text-dark font-size-md">
                  {props.clientData.clientName}
                </span>
                <br />
                <span>
                  {setLocale(localization, "Email")} {props.clientData.email}{" "}
                </span>
                <br />
                <span>
                  {props.clientData.country}, {props.clientData.city},{" "}
                  {props.clientData.street}
                </span>
              </p>
            </address>
            <p>{date}</p>
          </div>
        </div>
        <div className="mt-4">
          <Table
            className="main-table"
            rowClassName={() => "rowClassName1"}
            columns={columns}
            pagination={false}
            expandable={{
              defaultExpandAllRows: true,
              expandedRowRender: (recordGroup) => showItemsGroup(recordGroup),
              expandIcon: ({ expanded, onExpand, record }) =>
                record.typeOfService == "0" ? (
                  expanded ? (
                    <div></div>
                  ) : (
                    <div></div>
                  )
                ) : null,

              rowExpandable: (record) => record.typeOfService !== "1",
            }}
            dataSource={props.serviceInOffer.offerItems}
          />

          <div className="d-flex justify-content-end">
            <div className="text-right ">
              <div className="border-bottom">
                <p className="mb-2">
                  <span> {setLocale(localization, "SubTotalAmount")}: </span>
                  <NumberFormat
                    displayType={"text"}
                    value={amountPrice}
                    prefix={"€"}
                    thousandSeparator={true}
                  />
                </p>
                <p>
                  {setLocale(localization, "Discount(€)")}: {amountDiscount}
                </p>
              </div>
              <h2 className="font-weight-semibold mt-3">
                <span className="mr-1">
                  {setLocale(localization, "GrandTotal")}:{" "}
                </span>
                <NumberFormat
                  displayType={"text"}
                  value={amountFinalPrice}
                  prefix={"€"}
                  thousandSeparator={true}
                />
              </h2>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
});

export default ThirdStep;
