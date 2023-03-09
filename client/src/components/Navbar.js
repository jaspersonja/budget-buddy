import React from 'react';
import {Menu, Modal} from 'antd';
import { useNavigate } from "react-router-dom";
import {HomeOutlined, MehOutlined, LoginOutlined, BookOutlined, LogoutOutlined} from '@ant-design/icons'
import {useState} from 'react'
import Login from './Login'
import Register from './Register'
import Auth from '../utils/auth'

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
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />
    },
  ]

  const navItemsLoggedOut = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />,
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

  const navigate = useNavigate();

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
    switch(e.key) {
      case 'login':
        showModal(true);
        break;
      case 'register':
        showModal(true);
        break;
      case 'home':
        navigate('/')
        break;
      case 'profile':
        navigate('/profile');
        break;
      case 'logout':
        Auth.logout();
        navigate('/');
    }
  };



  return (
    <>
    <Menu style={{background: '#36cfc9'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={Auth.loggedIn() ? navItems : navItemsLoggedOut} />
    <Modal
      open={open}
      title={current === 'login' ? 'Login' : 'Register'}
      onCancel={closeModal}
      footer={[]}
    >
      {current === 'login' ? <Login/> : <Register/>}
    </Modal>
    </>
  );
}
