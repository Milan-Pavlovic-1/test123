import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Form, Input, Button, message, Tooltip } from "antd";
import { LockOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import ApiService from 'services/ApiService';
import { AUTH_TOKEN } from 'redux/constants/Auth';
import jwt from 'jwt-decode';
import { AUTH_PREFIX_PATH, ClaimsKey } from 'configs/AppConfig';
import { useHistory } from 'react-router-dom';
import IntlMessage from 'components/util-components/IntlMessage';
import { connect } from "react-redux";
import { set } from 'lodash';

var serviceLangToUSe = 'lang/locales/it_IT.json';

function ChangePassword(props) {

    const [currentLang, SetCurrentLang] = useState();

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const theme = useSelector(state => state.theme.currentTheme)
    const history = useHistory();

    const setLocale = (isLocaleOn, localeKey) =>
        isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

    useEffect(() => {
        if (props.locale == 'en') {
            serviceLangToUSe = require('lang/locales/en_US.json');
            SetCurrentLang(props.locale);
        } else {
            serviceLangToUSe = require('lang/locales/it_IT.json');
            SetCurrentLang(props.locale);
        }

    }, [props.locale]);

    const onSend = values => {
        setLoading(true)
        var formData = new FormData();
        formData.append("currentPassword", values.currentPassword);
        formData.append("password", values.newPassword);
        formData.append("confirmPassword", values.confirmPassword);
        formData.append("userId", jwt(localStorage.getItem('auth_token'))[ClaimsKey]);

        ApiService.Post("Account/changePassword", formData)
            .then((response) => {
                if (response == '') {
                    localStorage.removeItem(AUTH_TOKEN)
                    setTimeout(() => {
                        setLoading(false)
                        message.success(serviceLangToUSe.YourPasswordHasBeenSuccessfullyChanged);
                    }, 1500);
                    setTimeout(() => {
                        history.push(`${AUTH_PREFIX_PATH}/login`);
                        window.location.reload();
                    }, 2000)
                }
                else {
                    setTimeout(() => {
                        setLoading(false);
                        var msg = serviceLangToUSe[`${response[0].code}`];
                        if (msg != undefined)
                            message.error(serviceLangToUSe[`${response[0].code}`]);
                        else
                            message.error(response[0].description);
                    }, 1500);
                }
            })
    };
    return (
        <div className="h-100" >
            <div className="container d-flex flex-column justify-content-center h-100">
                <Row justify="center">
                    <Col xs={20} sm={20} md={20} lg={9}>
                        <Card className='shadow'>
                            <div className="my-4">
                                <div className="text-center my-4">
                                    <img width="70%" className="img-fluid" src={`/img/${theme === 'light' ? 'TIPASLogo.png' : 'logo-white.png'}`} alt="" />
                                </div>
                                <Row justify="center">
                                    <Col xs={24} sm={24} md={20} lg={20}>
                                        <Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
                                            <Form.Item
                                                label={setLocale(true, "CurrentPassword")}
                                                name="currentPassword"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: setLocale(true, "CurrentPasswordIsRequired"),
                                                    }
                                                ]}
                                            >
                                                <Input.Password prefix={<LockOutlined className="text-primary" />}/>
                                            </Form.Item>
                                            <Form.Item
                                                name="newPassword"
                                                label={setLocale(true, "NewPassword")}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: setLocale(true, "NewPasswordIsRequired"),
                                                    }
                                                ]}
                                            >
                                                <Input.Password prefix={<LockOutlined className="text-primary" />} />
                                            </Form.Item>
                                            <Form.Item
                                                name="confirmPassword"
                                                label={setLocale(true, "ConfirmPassword")}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: setLocale(true, "ConfirmPasswordIsRequired"),
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('newPassword') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(serviceLangToUSe.TwoPassNotMatch));
                                                        },
                                                    })
                                                ]}
                                            >
                                                <Input.Password prefix={<LockOutlined className="text-primary" />} />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button loading={loading} type="primary" htmlType="submit" block>{loading ? setLocale(true, "Sending") : setLocale(true,"Submit")}</Button>
                                            </Form.Item>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


const mapStateToProps = ({ theme }) => {
    const { locale } = theme;
    return { locale }
};

export default connect(mapStateToProps)(ChangePassword);
