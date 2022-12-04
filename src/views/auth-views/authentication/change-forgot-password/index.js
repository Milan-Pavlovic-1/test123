import React, { useState } from 'react'
import { Card, Row, Col, Form, Input, Button, message, Tooltip } from "antd";
import { LockOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import ApiService from 'services/ApiService';
import { AUTH_TOKEN } from 'redux/constants/Auth';
function ChangeForgotPassword() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const theme = useSelector(state => state.theme.currentTheme)

    const onSend = values => {
        
        var formData= new FormData();
        formData.append("password",values.newPassword);
        formData.append("confirmPassword",values.confirmPassword);
        formData.append("userId","d9c4d3df-35e9-48da-8ace-f2252a2ff3c3");

        ApiService.Post("Account/changePassword",formData)
        .then((d)=>{
            localStorage.removeItem(AUTH_TOKEN)
        });
        
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            message.success('New password has send to your email!');
        }, 1500);
    };
    return (
        <div className="h-100" >
            <div className="container d-flex flex-column justify-content-center h-100">
                <Row justify="center">
                    <Col xs={20} sm={20} md={20} lg={9}>
                        <Card className='shadow'>
                            <div className="my-2">
                                <div className="text-center my-4">
                                    <img width="70%" className="img-fluid" src={`/img/${theme === 'light' ? 'TIPASLogo.png' : 'logo-white.png'}`} alt="" />
                                </div>
                                <Row justify="center">
                                    <Col xs={24} sm={24} md={20} lg={20}>
                                        <Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
                                            <Form.Item
                                                name="newPassword"
                                                label="New Password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'This field is required.',
                                                    }
                                                ]}
                                            >
                                                <Input.Password prefix={<LockOutlined className="text-primary" />} />
                                            </Form.Item>
                                            <Form.Item
                                                name="confirmPassword"
                                                label="Confirm Password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'This field is required.',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('newPassword') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                        },
                                                    })
                                                ]}
                                            >
                                                <Input.Password prefix={<LockOutlined className="text-primary" />} />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button loading={loading} type="primary" htmlType="submit" block>{loading ? 'Sending' : 'Submit'}</Button>
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
export default ChangeForgotPassword;
