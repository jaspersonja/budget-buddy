import {Spin, Layout, Row} from 'antd'
const {Content} = Layout;

export default function Loading() {

    return (
        <Content justify="center">
            <Row><Spin size='large'/></Row>
        </Content>
    )
}