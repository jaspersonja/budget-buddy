import React, {useState} from 'react';
import {Typography, Layout, Row, Col} from 'antd';
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
            <Title level={2}>Welcome to Budget Buddy!</Title>
            <Row justify="space-between" align="top">
               <Col span={12}>
                    <Text>Budget Buddy is a budgeting application to help you with your financial goals! Here you can set a budget goals and track them! With visual representations of your spending habits and a calendar to see when bills are due, you'll be on your way to achieving your target spending limit! Login or make an account to get started!</Text>
               </Col> 
            </Row>
            
        </Content>
    )
}

export default Home;