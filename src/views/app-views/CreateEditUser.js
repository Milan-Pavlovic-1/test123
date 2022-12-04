import React, { useContext, useEffect, useState } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Button,
  Upload,
  Layout,
  Modal,
  Table,
  Dropdown,
  Select,
  message,
} from "antd";
import { Checkbox } from "antd";
import navigationConfig from "configs/NavigationConfig";
import moment from "moment";
import Regex from "configs/RegEx";
import JwtAuthService from "services/JwtAuthService";
import ApiService from "services/ApiService";
import { useHistory } from "react-router-dom";
import AuthContext from "views/auth-views/authentication/context/auth-context";
import { connect } from "react-redux";
import dateFormat from "dateformat";
import jwt from "jwt-decode";
import { APP_PREFIX_PATH, ClaimsRole } from "configs/AppConfig";
import IntlMessage from "components/util-components/IntlMessage";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { confirm } = Modal;

var serviceLangToUSe = "lang/locales/it_IT.json";

function CreateEditUser(props) {
  const { mode, params, localization, accountSettings } = props;

  const [currentLang, SetCurrentLang] = useState();
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState();
  const history = useHistory();
  const [userRoles, setUserRoles] = useState([]);
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const isRoleDropdownHidden =
    accountSettings === false &&
    jwt(localStorage.getItem("auth_token"))[ClaimsRole] === "Admin"
      ? false
      : true;
  const save = (values) => {
    var form = new FormData();

    form.append("firstName", values.firstName);
    form.append("lastName", values.lastName);
    form.append("email", values.email);
    form.append(
      "street",
      values.street === undefined || values.street == null ? "" : values.street
    );
    form.append(
      "city",
      values.city === undefined || values.city == null ? "" : values.city
    );
    form.append(
      "country",
      values.country === undefined || values.country == null
        ? ""
        : values.country
    );
    form.append("dateOfBird", dateFormat(values.dateOfBird, "yyyy-mm-dd"));
    form.append(
      "contact",
      values.contact === "undefined" || values.contact == null
        ? ""
        : values.contact
    );
    form.append("role", values.role);
    form.append("note", values.note === undefined ? "" : values.note);
    form.append("avatar", avatar);

    if (mode === "ADD") {
      JwtAuthService.signUp(form).then(() => {
        history.push("/app/account/AccountList");
      });
    }
    if (mode === "EDIT" && params.key != null) {
      ApiService.Put("Account", form, params.key).then((data) => {
        if (data.token != null && accountSettings === true) {
          localStorage.setItem("auth_token", data.token);
          setTimeout(() => {
            window.location.reload();
          }, 800);
        }
        if (accountSettings == false) {
          history.push(`${APP_PREFIX_PATH}/account/AccountList`);
        }
        message.success(serviceLangToUSe.UserHasBeenChangedSuccessfully);
      });
    }
  };
  useEffect(() => {
    if (props.locale == "en") {
      serviceLangToUSe = require("lang/locales/en_US.json");
      SetCurrentLang(props.locale);
    } else {
      serviceLangToUSe = require("lang/locales/it_IT.json");
      SetCurrentLang(props.locale);
    }
  }, [props.locale]);
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
    /* this is for dropdown on create/edit user excluding account settings form */
    if (
      jwt(localStorage.getItem("auth_token"))[ClaimsRole] === "Admin" &&
      accountSettings === false
    ) {
      ApiService.Get("Account/getAllUserRoles").then((data) => {
        setUserRoles(data);
      });
    }
  }, []);

  useEffect(() => {
    if ((mode === "EDIT" || mode === "VIEW") && params.key != null) {
      ApiService.GetById("Account", params.key).then((data) => {
        form.setFieldsValue({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          role: data.role,
          street: data.street === "null" ? "" : data.street,
          city: data.city === "null" ? "" : data.city,
          country: data.country === "null" ? "" : data.country,
          contact: data.contact === "null" ? "" : data.contact,
          dateOfBird: moment(data.dateOfBird),
          note: data.note === "null" ? "" : data.note,
        });
      });
    }
  }, [form]);
  return (
    <div className="m-2">
      <div>
        {mode === "ADD" ? (
          <h1>{setLocale(localization, "CreateUser")}</h1>
        ) : (
          <h1>{setLocale(localization, "EditUser")}</h1>
        )}
      </div>
      <Form
        form={form}
        layout="vertical"
        name="create-edit-user"
        onFinish={save}
      >
        <Row className="my-5">
          <Col className="mx-4" span={12}>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label={setLocale(localization, "FirstName")}
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: setLocale(
                        localization,
                        "FirstNameFieldIsRequired"
                      ),
                    },
                  ]}
                >
                  {mode == "EDIT" ? (
                    <Input disabled />
                  ) : mode === "ADD" ? (
                    <Input placeholder={serviceLangToUSe.FirstName} />
                  ) : (
                    <Input readOnly />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={setLocale(localization, "LastName")}
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: setLocale(
                        localization,
                        "LastNameFieldIsRequired"
                      ),
                    },
                  ]}
                >
                  {mode == "EDIT" ? (
                    <Input disabled />
                  ) : mode === "ADD" ? (
                    <Input placeholder={serviceLangToUSe.LastName} />
                  ) : (
                    <Input readOnly />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={12}>
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
                      message: setLocale(localization, "EmailFieldIsValid"),
                    },
                  ]}
                >
                  {mode == "EDIT" ? (
                    <Input disabled />
                  ) : mode === "ADD" ? (
                    <Input placeholder={serviceLangToUSe.Email} />
                  ) : (
                    <Input readOnly />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={setLocale(localization, "Contact")}
                  name="contact"
                >
                  {mode === "VIEW" ? (
                    <Input readOnly />
                  ) : (
                    <Input placeholder={serviceLangToUSe.Contact} />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label={setLocale(localization, "Address")}>
              <Input.Group compact>
                <Form.Item name="street" noStyle>
                  {mode === "VIEW" ? (
                    <Input readOnly style={{ width: "40%" }} />
                  ) : (
                    <Input
                      style={{ width: "40%" }}
                      placeholder={serviceLangToUSe.InputStreet}
                    />
                  )}
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
                  {mode === "VIEW" ? (
                    <Input readOnly style={{ width: "30%" }} />
                  ) : (
                    <Input
                      style={{ width: "30%" }}
                      placeholder={serviceLangToUSe.InputCity}
                    />
                  )}
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
                  {mode === "VIEW" ? (
                    <Input readOnly style={{ width: "30%" }} />
                  ) : (
                    <Input
                      style={{ width: "30%" }}
                      placeholder={serviceLangToUSe.InputCountry}
                    />
                  )}
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label={setLocale(localization, "DateOfBird")}
                  name="dateOfBird"
                >
                  {mode === "VIEW" ? (
                    <DatePicker disabled style={{ width: "100%" }} />
                  ) : (
                    <DatePicker
                      style={{ width: "100%" }}
                      disabledDate={(d) => d.isAfter(moment())}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  hidden={isRoleDropdownHidden}
                  initialValue={"3b39ea5a-9382-42e2-896c-cc3e2dfff11e"}
                  name="role"
                  label={setLocale(localization, "Role")}
                >
                  <Select>
                    {userRoles.map((role) => (
                      <Select.Option key={role.id} value={role.id}>
                        {setLocale(localization, role.name)}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {mode === "ADD" || mode === "EDIT" ? (
              <div>
                <Form.Item
                  name="avatar"
                  label={setLocale(localization, "Avatar")}
                  getValueFromEvent={(e) => setAvatar(e.target.files[0])}
                >
                  <Col span={12}>
                    <Upload name="logo" listType="picture">
                      <Button style={{ width: "230px" }}>
                        {setLocale(localization, "ClickToUpload")}
                      </Button>
                    </Upload>
                  </Col>
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
                        {mode == "EDIT"
                          ? setLocale(localization, "Save")
                          : setLocale(localization, "Create")}
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            ) : (
              <Row gutter={10}>
                <Col>
                  <Form.Item>
                    <Button type="primary">
                      <Link
                        to={`${APP_PREFIX_PATH}/account/edit-account/${params.key}`}
                      >
                        {setLocale(localization, "Edit")}
                      </Link>
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            )}
          </Col>
          <Col span={10}>
            <Form.Item name="note" label={setLocale(localization, "Note")}>
              {mode === "VIEW" ? (
                <Input.TextArea
                  readOnly
                  rows={10}
                  placeholder={serviceLangToUSe.Note}
                />
              ) : (
                <Input.TextArea rows={10} placeholder={serviceLangToUSe.Note} />
              )}
            </Form.Item>
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

export default connect(mapStateToProps)(CreateEditUser);
