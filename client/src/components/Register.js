import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Button, Form, Input } from 'antd';

import Auth from '../utils/auth';

const Register = () => {
  const [register, setRegister] = useState({ 
    username: '',
    email: '',
    password:''
  });
  const [addUser, { error, data }] = useMutation (ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(register);

    try {
      const { data } = await addUser ({
        variables: { ...register },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

    return (
        <>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
        <Form
            name='register'
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
        >
            
            <Form.Item
                label='Email'
                name='email'
                value={register.email}
                onChange={handleChange}
                rules={[
                    {required: true, message: 'Please input your email!'}
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label='Username'
                name='username'
                value={register.username}
                onChange={handleChange}
                rules={[
                    {required: true, message: 'Please input your username!'}
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                value={register.password}
                onChange={handleChange}
                rules={[
                  {required: true, message: 'Please input your password!'}
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 20,
                    span: 16,
                }}
            >
                <Button onClick={handleSubmit} style={{background: '#13c2c2'}} htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
        </Form>
        )}

        {error && (
          <div>
            {error.message}
          </div>
        )}
        </>
    );
};

export default Register;
