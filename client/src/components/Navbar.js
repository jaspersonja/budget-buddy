import React from 'react';
import {Menu, Modal} from 'antd';
import {HomeOutlined, MehOutlined, LoginOutlined, BookOutlined} from '@ant-design/icons'
import {useState} from 'react'
import Login from './Login'
import Register from './Register'

export default function Nav() {
 
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

const [current, setCurrent] = useState('home');
const [open, setOpen] = useState(false);

const showModal = () => {
  setOpen(true);
}

const closeModal = () => {
  setOpen(false);
}

const onClick = (e) => {
  setCurrent(e.key)
  if (e.key === 'login' || e.key === 'register') {
    showModal()
  }
};



  return (
    <>
    <Menu style={{background: '#36cfc9'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navItems} />
    <Modal
      open={open}
      title="Login"
      onCancel={closeModal}
      footer={[]}
    >
      {current === 'login' ? <Login/> : <Register/>}
    </Modal>
    </>
  );
}
