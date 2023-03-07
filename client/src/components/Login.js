//import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
//import { useMutation } from '@apollo/client';
//import { LOGIN_USER } from '../utils/mutations';

//import Auth from '../utils/auth';

export default function Login() {
  // const [formState, setFormState] = useState({ email: '', password: ''});
  // const[login, { error, data }] = useMutation(LOGIN_USER);

  //   const handleLogin = () => {
  //     // add functionality here 

    //};

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
                name='email'
                rules={[
                    {required: true, message: 'Please input your email!'}
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
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
                <Button style={{background: '#13c2c2'}} htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
        </Form>
        </>
    )
}