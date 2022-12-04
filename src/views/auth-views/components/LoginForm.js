import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form, Input, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {
  signIn,
  showLoading,
  showAuthMessage,
  hideAuthMessage,
  signInWithGoogle,
  signInWithFacebook,
} from "redux/actions/Auth";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import IntlMessage from "components/util-components/IntlMessage";

export const LoginForm = (props) => {
  let history = useHistory();
  const setLocale = (isLocaleOn, localeKey) =>
    isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
  const {
    showForgetPassword,
    hideAuthMessage,

    showLoading,

    extra,
    signIn,
    token,
    loading,
    localization,
    redirect,
    showMessage,
    message,
    allowRedirect,
  } = props;

  const initialCredential = {
    email: "admin@outlook.com",
    password: "test123!A",
  };

  const onLogin = (values) => {
    showLoading();
    signIn(values);
  };
  useEffect(() => {
    if (token !== null && allowRedirect) {
      history.push(redirect);
    }
    if (showMessage) {
      setTimeout(() => {
        hideAuthMessage();
      }, 3000);
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form
        layout="vertical"
        name="login-form"
        initialValues={initialCredential}
        onFinish={onLogin}
      >
        <Form.Item
          name="email"
          label={setLocale(localization, "Email")}
          rules={[
            {
              required: true,
              message: setLocale(localization, "PleaseInputYourEmail"),
            },
            {
              type: "email",
              message: setLocale(localization, "PleaseEnterAValidateEmail"),
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label={
            <div
              className={`${
                showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>{setLocale(localization, "Password")}</span>
            </div>
          }
          rules={[
            {
              required: true,
              message: setLocale(localization, "PleaseInputYourPassword"),
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {setLocale(localization, "SignIn")}
          </Button>
        </Form.Item>
        {extra}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
};

const mapDispatchToProps = {
  signIn,
  showAuthMessage,
  showLoading,
  hideAuthMessage,
  signInWithGoogle,
  signInWithFacebook,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
