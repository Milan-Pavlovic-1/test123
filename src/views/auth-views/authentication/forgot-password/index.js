import React, { useState } from 'react'
import { Card, Row, Col, Form, Input, Button, message } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import ApiService from 'services/ApiService';
const ForgotPassword = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const theme = useSelector(state => state.theme.currentTheme)

	const onSend = values => {
		setLoading(true)
		var formData=new FormData();
        formData.append("email",values.email);
        ApiService.Post("Account/forgotPassword", formData)
		.then((d)=>{
			if(d.data){ message.success('New password for '+ values.email +'  successfully generated')
		}});
		setLoading(false)	
	};

	return (
		<div className="h-100">
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={9}>
						<Card  className='shadow'>
							<div className="my-2">
								<div className="text-center">
									<img className="img-fluid" src={`/img/${theme === 'light' ? 'IEA2tech-b.PNG' : 'logo-white.png'}`} alt="" />
								</div>
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
										<Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
											<Form.Item
											    label="Email"
												name="email"
												rules={
													[
														{
															required: true,
															message: 'Email field is required.'
														},
														{
															type: 'email',
															message: 'Please enter a valid email address.'
														}
													]
												}>
												<Input prefix={<MailOutlined className="text-primary" />} />
											</Form.Item>
											<Form.Item>
												<Button loading={loading} type="primary" htmlType="submit" block>{loading ? 'Sending' : 'Reset Password'}</Button>
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

export default ForgotPassword
