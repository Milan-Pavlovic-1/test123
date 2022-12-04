import { Button, Col, Form, Input, Modal, Row } from "antd";
import IntlMessage from "components/util-components/IntlMessage";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ApiService from "services/ApiService";

function ClientDetailsModal(props) {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  let history = useHistory();
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  function handleOk() {
    history.push(
      `${APP_PREFIX_PATH}/clients/view-client/${props.client.clientId}`
    );
  }

  function handleCancel() {
    setVisible(false);
  }

  useEffect(() => {
    ApiService.GetById("Client/GetById", props.client.clientId).then((d) => {
      form.setFieldsValue({
        clientName: d.clientName,
        contactPerson: d.contactPerson,
        email: d.email,
        street: d.street,
        city: d.city,
        country: d.country,
        phoneNumber: d.phoneNumber,
      });
    });
  }, []);
  useEffect(() => {}, [form]);
  return (
    <div>
      <span
        style={{ cursor: "pointer", color: "blue" }}
        type="primary"
        onClick={() => setVisible(true)}
      >
        {props.client.clientName}
      </span>
      <Modal
        title="Client details"
        visible={visible}
        okText={setLocale(props.localization, "MoreDetails")}
        onOk={handleOk}
        onCancel={handleCancel}
        width="50%"
        forceRender
      >
        <Form form={form} layout="vertical" name="create-edit-user">
          <Row>
            <Col span={24}>
              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label={setLocale(props.localization, "Client")}
                    name="clientName"
                  >
                    <Input readOnly />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={setLocale(props.localization, "Email")}
                    name="email"
                  >
                    <Input readOnly />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label={setLocale(props.localization, "ContactPerson")}
                    name="contactPerson"
                  >
                    <Input readOnly />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={setLocale(props.localization, "PhoneNumber")}
                    name="phoneNumber"
                  >
                    <Input readOnly />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={12}>
                <Col span={24}>
                  <Form.Item label={setLocale(props.localization, "Address")}>
                    <Input.Group compact>
                      <Form.Item name="street" initialValue={""} noStyle>
                        <Input readOnly style={{ width: "40%" }} />
                      </Form.Item>
                      <Form.Item name="city" initialValue={""} noStyle>
                        <Input
                          readOnly
                          style={{ width: "30%" }}
                          initialValue={""}
                        />
                      </Form.Item>
                      <Form.Item name="country" noStyle initialValue={""}>
                        <Input
                          readOnly
                          style={{ width: "30%" }}
                          initialValue={""}
                        />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

export default ClientDetailsModal;
