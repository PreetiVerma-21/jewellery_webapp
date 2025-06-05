import React from 'react';
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const submit = () => {
        console.log("submit data")
    }
  return (
    <div className="signup-container">
      <form className="signup-form">
        <div className="round"></div>
        <h2>Create Account</h2>
        <p className="subtitle">Join the Jewellery Experience</p>
        <div className="input-group">
          <Input
            size="large"
            placeholder="Username"
            prefix={<UserOutlined />}
            className="signup-input"
          />
        </div>
        <div className="input-group">
          <Input
            size="large"
            placeholder="Email"
            prefix={<MailOutlined />}
            className="signup-input"
          />
        </div>
        <div className="input-group">
          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
            className="signup-input"
          />
        </div>
        <div className="input-group">
          <Input.Password
            size="large"
            placeholder="Confirm Password"
            prefix={<LockOutlined />}
            className="signup-input"
          />
        </div>
        <Button type="primary" htmlType="submit" className="signup-btn" block>
          Sign Up
        </Button>
        <div className="signup-footer">
          <span>Already have an account?</span>
          <a href="/login"> Login</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;