import React from "react";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const submit = () => {
		console.log("submit data");
	};
	return (
		<div className="login-container">
			<form className="login-form">
				{/* <div className="round"></div> */}
				<h2>Welcome Back!</h2>
				<p className="subtitle">Sign in to your Jewellery Account</p>
				<div className="input-group">
					<Input
						size="large"
						placeholder="Username"
						prefix={<UserOutlined />}
						className="login-input"
					/>
				</div>
				<div className="input-group">
					<Input.Password
						size="large"
						placeholder="Password"
						prefix={<LockOutlined />}
						className="login-input"
					/>
				</div>
				<Button type="primary" htmlType="submit" className="login-btn" block>
					Login
				</Button>
				<div className="login-footer">
					<span>Don't have an account?</span>
					<a href="/register"> Register</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
