import React from 'react';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-card">
        <div className="contactus-info">
          <h2>Contact Us</h2>
          <p className="subtitle">We'd love to hear from you! Reach out with any questions or feedback.</p>
          <div className="contactus-details">
            <div>
              <MailOutlined /> shimmerjewels@email.com
            </div>
            <div>
              <PhoneOutlined /> +1 234 567 8901
            </div>
            <div>
              <EnvironmentOutlined /> 123 Gold Street, Gem City, Country
            </div>
          </div>
        </div>
        <form className="contactus-form">
          <Input size="large" placeholder="Your Name" className="contactus-input" />
          <Input size="large" placeholder="Your Email" className="contactus-input" />
          <Input.TextArea rows={4} placeholder="Your Message" className="contactus-input" />
          <Button type="primary" htmlType="submit" className="contactus-btn" block>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;