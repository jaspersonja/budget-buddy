import {Row, Col, Typography, Divider, Card} from 'antd'
import {PieChart} from 'react-minimal-pie-chart';
import {PieChartFilled} from '@ant-design/icons'
import {bills, grocery, shopping, investment, pet, dining} from '../utils/colors-temp'


const {Text, Title} = Typography;

export default function LoggedInHome() {
  const data = [
    {title: bills.name, value: 2300, color: bills.color},
    {title: shopping.name, value: 200, color: shopping.color},
    {title: grocery.name, value: 500, color: grocery.color},
    {title: pet.name, value: 300, color: pet.color}
  ];
  
  return(
    <>
      <Row gutter={32}>
        <Col span={8}><Title level={1} type='secondary'>Your Budget At A Glance!</Title></Col>
      </Row>
      <Row>
        <Col>
          <Card style={{background: '#e6fffb', borderColor: '#e6fffb'}}title='Your budget this month'>$3000</Card>
        </Col>
        <Col offset={8}>
          <Row>
            <PieChart
              style={{
                fontSize: '8px',
              }}
              segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
              animate
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
              lineWidth={60} 
              data={data}
              labelPosition={100 - 60 / 2}
              labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
              }}
            />
          </Row>
          {data.map((category) => {
            return (
              <Row key={category.title}><PieChartFilled style={{color: category.color}}/><Text>: {category.title}</Text></Row>
            )
          })}

        </Col>
      </Row>
    </>
  )
}