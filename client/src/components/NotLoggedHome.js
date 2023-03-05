import {Typography, Row, Col, Image} from 'antd';
const {Title, Text} = Typography;

export default function NotLoggedHome() {

    return (
        <>
        <Title level={2}>Welcome to Budget Buddy!</Title>
            <Row style={{padding: '20px 0 0 0'}} justify="space-around" align="top">
               <Col span={12}>
                    <Title level={4} type='secondary'>Budget Buddy is a budgeting application to help you with your financial goals! Here you can set a budget goals and track them! With visual representations of your spending habits and a calendar to see when bills are due, you'll be on your way to achieving your target spending limit! Login or make an account to get started!</Title>
               </Col> 
               <Col><Image preview={false} width={200} src="https://i.imgur.com/nR0hBVl.png"/></Col>
            </Row>
        </>
    )
}
