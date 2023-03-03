import { Button, Form, Input } from 'antd';

export default function Register() {
    const handleRegister = () => {

    };

    return (
        <>
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
                rules={[
                    {required: true, message: 'Please input your email!'}
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label='Username'
                name='username'
                rules={[
                    {required: true, message: 'Please input your username!'}
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