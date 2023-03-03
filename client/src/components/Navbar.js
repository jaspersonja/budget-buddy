import React from 'react';
import {Typography, Menu} from 'antd';
import {HomeOutlined, MehOutlined, LoginOutlined, BookOutlined} from '@ant-design/icons'
import {useState} from 'react'

export default function Nav() {
 //const linkStyle = { border: '1px black', padding: '5px' };
const navItems = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Profile',
    key: 'profile',
    icon: <MehOutlined />,
  },
  {
    label: 'Login',
    key: 'login',
    icon: <LoginOutlined />
  },
  {
    label: 'Register',
    key: 'register',
    icon: <BookOutlined />
  }
]

const [current, setCurrent] = useState('mail');
const onClick = (e) => {
  console.log('click ', e);
  setCurrent(e.key);
};
  return (
    <Menu style={{background: '#36cfc9'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navItems} />
  );
}
