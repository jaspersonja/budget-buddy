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
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </Col>
            </Row>
        </>
    )
}