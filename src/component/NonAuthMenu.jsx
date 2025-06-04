import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'About Us',
    key: 'about',
    icon: <AppstoreOutlined />,
   
  },
  {
    label: 'Collections',
    key: 'collections',
    icon: <AppstoreOutlined />,

  },
  {
    label: 'Blog',
    key: 'blog',
    icon: <AppstoreOutlined />,

  },
  {
    label: 'Contact Us',
    key: 'contact',
    icon: <AppstoreOutlined />,

  },
//   {
//     label: 'Navigation Three - Submenu',
//     key: 'SubMenu',
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         children: [
//           { label: 'Option 1', key: 'setting:1' },
//           { label: 'Option 2', key: 'setting:2' },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           { label: 'Option 3', key: 'setting:3' },
//           { label: 'Option 4', key: 'setting:4' },
//         ],
//       },
//     ],
//   },
//   {
//     key: 'alipay',
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//   },
];
const NonAuthMenu = () => {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();

  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
     if(e.key == "home"){
        navigate("/")
    }else if(e.key == "about"){
        navigate("/about")
    }else if(e.key ==  "contact"){
        navigate("/contactUs")
    }else if(e.key == "blog"){
        navigate("/blog")
    }else if(e.key == "collections"){
        navigate("/collections")
    }
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NonAuthMenu;

//  <li >Home</li>
//               <li onClick={()=>navigate("/about")}>About Us</li>
//               <li>Collections</li>
//               <li>Pages</li>
//               <li><Button>Contact Us</Button></li>