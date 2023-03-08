import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Login() {
   const [formState, setFormState] = useState({ email: '', password: ''});
   const[login, { error, data }] = useMutation(LOGIN_USER);

     const handleLogin = (event) => {
       const { name, value } = event.target;

       setFormState({
        ...formState,
        [name]: value,
       });
       console.log(formState)
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      setFormState({
        email: '',
        password: '',
      });
    };

    return (
        <>
        <Form
            name='login'
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
                rules={[
                    {required: true, message: 'Please input your email!'}
                ]}
            >
                <Input 
                name='email'
                value={formState.email}
                onChange={handleLogin}/>
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[
                  {required: true, message: 'Please input your password!'}
                ]}
            >
                <Input.Password 
                name="password"
                value={formState.password}
                onChange={handleLogin}/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 20,
                    span: 16,
                }}
            >
                <Button onClick={handleFormSubmit} style={{background: '#13c2c2'}} htmlType="submit">
                    Submit
                </Button>
                {error && (
          <div>
            {error.message}
          </div>
        )}
                </Form.Item>
        </Form>
        </>
    )
}