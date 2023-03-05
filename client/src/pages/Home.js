import React, {useState} from 'react';
import {Typography, Layout, Row, Col, Image} from 'antd';
import NotLoggedHome from '../components/NotLoggedHome';
const {Content} = Layout;
const {Title, Text, Link} = Typography;

const Home = () => {

    
    return (
        <Content
        style={{
            padding: '10px 50px',
            height: '600px',
            background: '#e6fffb'
          }}>
            <NotLoggedHome/>
        </Content>
    )
}

export default Home;