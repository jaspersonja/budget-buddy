import React, {useState} from 'react';
import {Layout, Button} from 'antd';
import NotLoggedHome from '../components/NotLoggedHome';
import LoggedInHome from '../components/LoggedInHome';
const {Content} = Layout;

const Home = () => {
    // Adding logic to set loggedIn manually without being logged in. Replace with actual logged in logic.
    const [loggedIn, setLoggedIn] = useState(false);
    const click = () => {
        switch(loggedIn) {
            case true:
                setLoggedIn(false);
                break;
            case false:
                setLoggedIn(true)
        }
    }
    return (
        <Content
        style={{
            padding: '10px 50px',
            height: "calc(100vh - 200px)",
            background: '#e6fffb'
          }}>
            {loggedIn ? <LoggedInHome/> : <NotLoggedHome/>}
            {/* Temporary! REMOVE BUTTON WHEN LOGIN LOGIC IS ADDED*/}
            <Button onClick={click}>{loggedIn ? 'Logout' : 'Login'}</Button>
        </Content>
    )
}

export default Home;