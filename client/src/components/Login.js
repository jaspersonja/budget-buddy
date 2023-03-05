import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

export default function Login() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleLogin = () => {};
    const handleCancel = () => {
        setOpen(false);
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
                    offset: 8,
                    span: 16,
                }}
            >
                <Button style={{background: '#b7eb8f'}} htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
        </Form>
        </>
    )
}