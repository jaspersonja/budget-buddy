import logo from './logo.svg';
import './App.css';
//adding other imports
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Layout, Col, Divider, Row, Typography, List} from 'antd'
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddBudget from './components/AddBudget';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

// main graphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphQL',
});

//construct request middleware for JWT token for every request as an auth header or login??

const authLink = setContext((_, { login }) => {
  const token = localStorage.getItem('id_token');
  return {
    login: {
      ...login,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// set up client to execute the auth link middleware before making the request to the graphQL api
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const {Header, Content, Footer} = Layout;
const {Text, Link} = Typography;

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Header style={{
            background: '#36cfc9'
          }}>
            <Navbar/>
          </Header>
          <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/Profile" 
                element={<Profile />} 
              />
          </Routes>
          <Footer
          style={{
            background: "#b5f5ec"
          }}>
            <Row justify="space-between" align="top">
              <Col span={6}>
                <Divider orientation='left'>Our Githubs</Divider>
                <List bordered={false}>
                  <List.Item><Link href='https://github.com/jaspersonja' target="_blank">Jacob</Link></List.Item>
                  <List.Item><Link href='https://github.com/Ashe-Radus' target="_blank">Ashe</Link></List.Item>
                  <List.Item><Link href='https://github.com/Javier2596' target="_blank">Javier</Link></List.Item>
                  <List.Item><Link href='https://github.com/kkaiser101' target="_blank">Ken</Link></List.Item>
                  <List.Item><Link href='https://github.com/FruityOkapi' target="_blank">Joseph</Link></List.Item>
                </List>
              </Col>
              <Col span={10}>
                <Divider orientation='left'>About Us</Divider>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </Col>
            </Row>
          </Footer>
      </Router>
    </ApolloProvider>
  );
}

export default App;
