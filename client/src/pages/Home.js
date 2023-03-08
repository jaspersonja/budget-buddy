import React, {useState} from 'react';
import {Layout, Button} from 'antd';
import NotLoggedHome from '../components/NotLoggedHome';
import LoggedInHome from '../components/LoggedInHome';
import Auth from '../utils/auth';
const {Content} = Layout;

const Home = () => {    
    return (
        <Content
        style={{
            padding: '10px 50px',
            height: "calc(100vh - 200px)",
            background: '#e6fffb'
          }}>
            {Auth.loggedIn() ? <LoggedInHome/> : <NotLoggedHome/>}
        </Content>
    )
}

export default Home;