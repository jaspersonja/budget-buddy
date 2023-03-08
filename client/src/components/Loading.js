import {Spin, Layout, Row, Col} from 'antd'
const {Content} = Layout;

export default function Loading() {

    return (
        <Content style={{height: '100vh', background: '#e6fffb'}} justify="center">
            <Row><Col span={24}><Spin size='large'/></Col></Row>
        </Content>
    )
}