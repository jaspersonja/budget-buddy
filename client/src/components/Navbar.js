import React from 'react';
import {Typography, Menu} from 'antd';
import {HomeOutlined, MehOutlined} from '@ant-design/icons'
import { useState } from 'react';

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
  
]

const [current, setCurrent] = useState('home');
const onClick = (e) => {
  console.log('click ', e);
  setCurrent(e.key);
};
  return (
    <Menu style={{background: '#36cfc9'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navItems} />
  );
}
