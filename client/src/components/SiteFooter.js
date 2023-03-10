import {Col, Divider, Row, List, Typography} from 'antd'

export default function SiteFooter() {
    const {Text, Link} = Typography;
    return (
        <>
            <Row justify="space-around" align="top">
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
                <Text>Budget Buddy is an app that allows you to see your net income all in one place. From seeing expenses from bills, shopping, dining all the way to recurring investments! Budget buddy was created in order to make viewing your financials so much easier by including taxes in income and displaying all expenses in a user friendly balance sheet. As a group we wanted to create an app for those who want or need to budget their expenses better. We all have things we need to pay for or want to buy. Budget Buddy if here to help you with that.</Text>
              </Col>
            </Row>
        </>
    )
}