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


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/Profile" 
                element={<Profile />} 
              />
              <Route 
                path="/AddBudget" 
                element={<AddBudget />} 
              />
              <Route 
                path="/Navbar" 
                element={<Navbar />} 
              />
              <Route 
              path="/Signup" 
              element={<Signup />} 
            />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
