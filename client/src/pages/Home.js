import React from 'react';
import {Layout,} from 'antd';
import NotLoggedHome from '../components/NotLoggedHome';
const {Content} = Layout;

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