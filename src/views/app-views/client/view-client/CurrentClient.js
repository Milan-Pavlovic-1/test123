import { Table } from "antd";
import IntlMessage from "components/util-components/IntlMessage";
const CurrentClient = (props) => {
  const localization = props.localization;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

  const columns = [
    {
      title: setLocale(localization, "FullName"),
      dataIndex: "clientName",
      key: "clientName",
      width: "14%",
    },
    {
      title: setLocale(localization, "E-mail"),
      dataIndex: "email",
      key: "email",
      width: "14%",
    },
    {
      title: setLocale(localization, "Address"),
      dataIndex: "street",
      key: "street",
      width: "14%",
    },
    {
      title: setLocale(localization, "City"),
      dataIndex: "city",
      key: "city",
      width: "14%",
    },
    {
      title: setLocale(localization, "Country"),
      dataIndex: "country",
      key: "country",
      width: "14%",
    },
    {
      title: setLocale(localization, "PhoneNumber"),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: "14%",
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={props.client}
      loading={props.loading}
      pagination={false}
    />
  );
};
export default CurrentClient;
