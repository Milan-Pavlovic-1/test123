import React, { useEffect, useState } from "react";
import { Form, Input, Row, Col, Button, Modal, message } from "antd";
import Regex from "configs/RegEx";
import ApiService from "services/ApiService";
import { useHistory } from "react-router-dom";
import IntlMessage from "components/util-components/IntlMessage";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { connect } from "react-redux";
import StatusCode from "configs/StatusCode";
const { confirm } = Modal;

var serviceLangToUSe = "lang/locales/it_IT.json";

function CreateEditClient(props) {
  const { mode, params } = props;
  const [currentLang, SetCurrentLang] = useState();
  const [data, setData] = useState([]);
  const [track, setTrack] = useState({
    contactPerson: "",
    PhoneNumber: "",
    Street: "",
    City: "",
    Country: "",
  });
  let activityLog = { messages: [] };
  useEffect(() => {
    track.contactPerson.length > 0 &&
      activityLog.messages.push(
        "has changed client contact person information from " + '"'+
          data.contactPerson +'"'+
          " " +
          "to" +
          " " +'"'+
          track.contactPerson +'"'
      );
    track.PhoneNumber.length > 0 &&
      activityLog.messages.push(
        "has changed client phone number information from " +'"'+
          data.phoneNumber +'"'+
          " " +
          "to" +
          " " +'"'+
          track.PhoneNumber+'"'
      );
    track.City.length > 0 &&
      activityLog.messages.push(
        "has changed client city information from " +'"'+
          data.city +'"'+
          " " +
          "to" +
          " " +'"'+
          track.City +'"'
      );
    track.Street.length > 0 &&
      activityLog.messages.push(
        "has changed client street information from " +'"'+
          data.street +'"'+
          " " +
          "to" +
          " " +'"'+
          track.Street+'"'
      );
    track.Country.length > 0 &&
      activityLog.messages.push(
        "has changed client country information from " +'"'+
          data.country +'"'+
          " " +
          "to" +
          " " +'"'+
          track.Country+'"'
      );
  }, [track]);
  const [form] = Form.useForm();
  const history = useHistory();
  const localization = true;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

  useEffect(() => {
    if (props.locale == "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
      SetCurrentLang(props.locale);
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
      SetCurrentLang(props.locale);
    }
  }, [props.locale]);

  const save = (values) => {
    var form = new FormData();

    form.append("clientName", values.clientName);
    form.append("email", values.email);
    form.append("contactPerson", values.contactPerson);
    form.append("phoneNumber", values.phoneNumber);
    form.append("street", values.street);
    form.append("city", values.city);
    form.append("country", values.country);
    

    if (mode === "ADD") {
      ApiService.Post("Client/Insert", form).then((data) => {
        if (data == StatusCode.Successfully) {
          message.success(serviceLangToUSe.ClientHasBeenCreateSuccessfully);
          history.push(`${APP_PREFIX_PATH}/clients/ListClients`);
        } else if (data == StatusCode.UserExist) {
          message.warning(
            serviceLangToUSe.ClientWithThe +
              "  '" +
              values.email +
              "'  " +
              serviceLangToUSe.EmailExists
          );
          history.push(`${APP_PREFIX_PATH}/clients/ListClients`);
        } else {
          message.error(`Error occured!`);
        }
      });
    }
    if (mode === "EDIT" && params.key != null) {
      activityLog.messages.map((message)=>{
        form.append("messages", message)
      })
      ApiService.Put("Client/Update", form, params.key).then((data) => {
        if (data == true) {
          message.success(serviceLangToUSe.ClientHasBeenUpdatedSuccessfully);
          history.push(`${APP_PREFIX_PATH}/clients/ListClients`);
        }
      });
    }
    window.localStorage.setItem("activity", JSON.stringify(activityLog));
  };
  function showConfirm() {
    confirm({
      title: serviceLangToUSe.UnsavedInformation,
      content: serviceLangToUSe.WouldYouLikeSaveChange,
      okText: serviceLangToUSe.Yes,
      okType: "danger",
      cancelText: serviceLangToUSe.Cancel,
      closable: "true",
      onOk() {
        form.submit();
      },
      onCancel() {},
    });
  }
  useEffect(() => {
    if (mode === "EDIT" && params.key != null) {
      ApiService.GetById("Client/GetById", params.key).then((data) => {
        setData(data);
        form.setFieldsValue({
          clientName: data.clientName,
          contactPerson: data.contactPerson,
          email: data.email,
          street: data.street,
          city: data.city,
          country: data.country,
          phoneNumber: data.phoneNumber,
        });
      });
    }
  }, [form, mode, params]);
  return (
    <div className="m-2 client-add">
      <div>
        {mode === "ADD" ? (
          <h1 className="title">{setLocale(localization, "CreateClient")}</h1>
        ) : (
          <h1>{setLocale(localization, "EditClient")}</h1>
        )}
      </div>
      <Form
        form={form}
        layout="vertical"
        name="create-edit-user"
        onFinish={save}
      >
        <Row className="my-5">
          <Col span={24} xl={{ span: 12 }}>
            <Row gutter={10}>
              <Col span={10}>
                <Form.Item
                  label={setLocale(localization, "FullName")}
                  name="clientName"
                  rules={[
                    {
                      required: true,
                      message: setLocale(
                        localization,
                        "FullNameFieldIsRequired"
                      ),
                    },
                  ]}
                >
                  {mode === "EDIT" ? (
                    <Input disabled />
                  ) : (
                    <Input placeholder={serviceLangToUSe.FullName} />
                  )}
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  label={setLocale(localization, "Email")}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: setLocale(localization, "EmailFieldIsRequired"),
                    },
                    {
                      type: "email",
                      message: setLocale(
                        localization,
                        "PleaseEnterAValidEmailAddress"
                      ),
                    },
                  ]}
                >
                  {mode === "EDIT" ? (
                    <Input disabled />
                  ) : (
                    <Input placeholder={serviceLangToUSe.Email} />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "ContactPerson")}
                  name="contactPerson"
                >
                  <Input
                    placeholder={serviceLangToUSe.ContactPerson}
                    onChange={(e) =>
                      setTrack({ ...track, contactPerson: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "PhoneNumber")}
                  name="phoneNumber"
                >
                  <Input
                    placeholder={serviceLangToUSe.PhoneNumber}
                    onChange={(e) =>
                      setTrack({ ...track, PhoneNumber: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label={setLocale(localization, "Address")}>
              <Input.Group compact>
                <Form.Item name="street" initialValue={""} noStyle>
                  <Input
                    style={{ width: "28%" }}
                    placeholder={serviceLangToUSe.InputStreet}
                    onChange={(e) =>
                      setTrack({
                        ...track,
                        Street: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="city"
                  noStyle
                  rules={[
                    {
                      pattern: Regex.Letters,
                      message: Regex.LettersText,
                    },
                  ]}
                >
                  <Input
                    style={{ width: "27%" }}
                    placeholder={serviceLangToUSe.InputCity}
                    onChange={(e) =>
                      setTrack({ ...track, City: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="country"
                  noStyle
                  rules={[
                    {
                      pattern: Regex.Letters,
                      message: Regex.LettersText,
                    },
                  ]}
                >
                  <Input
                    style={{ width: "28%" }}
                    placeholder={serviceLangToUSe.InputCountry}
                    onChange={(e) =>
                      setTrack({ ...track, Country: e.target.value })
                    }
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Row gutter={10}>
              <Col>
                <Form.Item>
                  <Button onClick={showConfirm}>
                    {setLocale(localization, "Cancel")}
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    {mode === "EDIT"
                      ? setLocale(localization, "Save")
                      : setLocale(localization, "Create")}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};

export default connect(mapStateToProps)(CreateEditClient);
