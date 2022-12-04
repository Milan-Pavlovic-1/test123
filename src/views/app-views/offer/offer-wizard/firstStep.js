import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Form, Input, Select } from "antd";
import ApiService from "services/ApiService";
import IntlMessage from "components/util-components/IntlMessage";

var serviceLangToUSe = "lang/locales/it_IT.json";
const { Option } = Select;
const FirstStep = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const localization = props.localization;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  useImperativeHandle(ref, () => ({
    getForm() {
      return form;
    },
    submitFirstWizardForm() {
      var v = form.submit();
    },
  }));

  const [clients, setClients] = useState([]);
  const save = () => {
    props.next();
  };

  const onChangeSetInputOfferName = (input) => {
    props.setOfferName(input.target.value);
  };
  const onChangeSetClient = (input) => {
    props.setClientID(input);
    ApiService.GetById("Client/GetById", input).then((data) => {
      props.setDataClient(data);
    });
  };
  useEffect(() => {
    ApiService.Get("Client/Get").then((data) => {
      setClients(data);
    });
  }, []);
  useEffect(() => {
    if (props.locale === "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
    }
  }, [props.locale]);

  return (
    <Form layout="vertical" name="basic" onFinish={save} form={form}>
      <Form.Item
        label={setLocale(localization, "OfferName")}
        name="offerName"
        rules={[
          {
            required: true,
            message: setLocale(localization, "OfferNameIsRequired"),
          },
        ]}
        initialValue={props.offerName}
      >
        <Input
          onChange={onChangeSetInputOfferName}
          placeholder={serviceLangToUSe.OfferName}
        />
      </Form.Item>

      <Form.Item
        label={setLocale(localization, "Client")}
        name="clientId"
        rules={[
          {
            required: true,
            message: setLocale(localization, "PleaseSelectClient"),
          },
        ]}
        initialValue={props.clientID}
      >
        <Select
          placeholder={serviceLangToUSe.SelectAClient}
          onChange={onChangeSetClient}
          allowClear
          disabled={props.mode !== "ADD"}
        >
          {clients.map((client) => (
            <Option value={client.id}>{client.clientName}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
});

export default FirstStep;
