import { useEffect } from "react";
import { Form, Input, Row, Col, Button, Modal, message } from "antd";
import Regex from "configs/RegEx";
import ApiService from "services/ApiService";
import { Link, useHistory } from "react-router-dom";
import IntlMessage from "../../components/util-components/IntlMessage";
import { useState } from "react";
import { connect } from "react-redux";
import { APP_PREFIX_PATH } from "configs/AppConfig";
const { confirm } = Modal;
var serviceLangToUSe = "lang/locales/it_IT.json";

function CreateEditUser(props) {
  const { mode, params } = props;
  const [form] = Form.useForm();
  const history = useHistory();
  const [currentLang, SetCurrentLang] = useState();
  const { localization } = props;
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const isFieldReadOnly = mode === "VIEW" && true;
  console.log(localization);
  const save = (values) => {
    var form = new FormData();

    form.append("name", values.name);
    form.append(
      "description",
      values.description === undefined ? "" : values.description
    );
    form.append("price", values.price);
    form.append("discount", values.discount);

    if (mode === "ADD") {
      ApiService.Post("ServiceItem/Insert", form).then(
        () => history.push(`${APP_PREFIX_PATH}/price/priceList`),
        message.success(serviceLangToUSe.ServiceItemSuccessfulyAdded)
      );
    }
    if (mode === "EDIT" && params.key != null) {
      ApiService.Put("ServiceItem/Update", form, params.key).then(
        () => history.push(`${APP_PREFIX_PATH}/price/priceList`),
        message.success(serviceLangToUSe.ServiceItemSuccessfulyChanged)
      );
    }
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
    if (props.locale == "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
      SetCurrentLang(props.locale);
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
      SetCurrentLang(props.locale);
    }
  }, [props.locale]);
  useEffect(() => {
    if ((mode === "EDIT" || mode === "VIEW") && params.key != null) {
      ApiService.GetById("ServiceItem/GetById", params.key).then((data) => {
        form.setFieldsValue({
          name: data.name,
          description: data.description,
          price: data.price,
          discount: data.discount,
        });
      });
    }
  }, []);
  return (
    <div className="m-2 price">
      <div>
        {mode === "ADD" ? (
          <h1>{setLocale(localization, "CreateNewServiceItem")}</h1>
        ) : mode === "EDIT" ? (
          <h1>{setLocale(localization, "EditPriceForItemService")}</h1>
        ) : (
          <h1>{setLocale(localization, "ServiceItemDetails")}</h1>
        )}
      </div>
      <div className="former">
        <Form
          form={form}
          layout="vertical"
          name="create-edit-price"
          onFinish={save}
        >
          <Row className="my-5">
            <Col span={24} xl={{ span: 10 }}>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "Name")}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: serviceLangToUSe.NameFieldIsRequired,
                    },
                    {
                      pattern: Regex.LettersAndAphostrophe,
                      message: Regex.LettersAndAphostropheText,
                    },
                  ]}
                >
                  <Input
                    placeholder={serviceLangToUSe.Name}
                    readOnly={isFieldReadOnly}
                  />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "Price")}
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: serviceLangToUSe.PriceFieldIsRequired,
                    },
                    {
                      pattern: Regex.Numbers,
                      message: Regex.NumberText,
                    },
                  ]}
                >
                  <Input
                    placeholder={serviceLangToUSe.Price}
                    readOnly={isFieldReadOnly}
                  />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  label={setLocale(localization, "Discount")}
                  name="discount"
                  rules={[
                    {
                      required: true,
                      message: serviceLangToUSe.DiscountFieldIsRequired,
                    },
                    {
                      pattern: Regex.Numbers,
                      message: Regex.NumberText,
                    },
                  ]}
                >
                  <Input
                    placeholder={serviceLangToUSe.Discount}
                    readOnly={isFieldReadOnly}
                  />
                </Form.Item>
              </Col>

              {mode === "VIEW" ? (
                <Col>
                  <Form.Item>
                    <Button type="primary">
                      <Link
                        to={`${APP_PREFIX_PATH}/price/edit-price/${params.key}`}
                      >
                        {setLocale(localization, "Edit")}
                      </Link>
                    </Button>
                  </Form.Item>
                </Col>
              ) : (
                <Row gutter={20}>
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
              )}
            </Col>
            <Col span={10}>
              <Form.Item
                name="description"
                label={setLocale(localization, "Description")}
                readOnly={isFieldReadOnly}
              >
                <Input.TextArea
                  rows={10}
                  placeholder={serviceLangToUSe.AddADescription}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};
export default connect(mapStateToProps)(CreateEditUser);
