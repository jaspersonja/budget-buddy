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
import {Layout} from 'antd'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';

// main graphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//construct request middleware for JWT token for every request as an auth header or login??

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// set up client to execute the auth link middleware before making the request to the graphQL api
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const {Header, Footer} = Layout;

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
            <SiteFooter/>
          </Footer>
      </Router>
    </ApolloProvider>
  );
}

export default App;
