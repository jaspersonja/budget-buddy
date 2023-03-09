import {Row, Col, Typography, Divider, Card, Button} from 'antd'
import {PieChart} from 'react-minimal-pie-chart';
import {PieChartFilled} from '@ant-design/icons'
import {bills, grocery, shopping, investment, pet, dining} from '../utils/colors-temp'
import React, {useState} from 'react';
import {useQuery} from '@apollo/client'
import {QUERY_ME} from '../utils/queries'
import Loading from './Loading';
import {expenseCategory} from './ExpenseCategory'


const {Text, Title} = Typography;

export default function LoggedInHome() {
  const [userData, setUserData] = useState({})
  const {loading, data} = useQuery(QUERY_ME)
  const [dataArray, setDataArray] = useState([])
  
  const pieData = [
    {title: bills.name, value: 2300, color: bills.color},
    {title: shopping.name, value: 200, color: shopping.color},
    {title: grocery.name, value: 500, color: grocery.color},
    {title: pet.name, value: 300, color: pet.color},
    {title: investment.name, value: 3000, color: investment.color},
    {title: dining.name, value: 300, color: dining.color}
  ];

  const fixedArgs = (cost, content, name) => {
    let newItem= {};
    switch(name) {
        case 'Bill':
            newItem = {title: name, color: expenseCategory[0].color, value: cost, content: content};
            console.log(newItem)
            return newItem;
        case 'Grocery':
            newItem = {title: name, color: expenseCategory[1].color, value: cost, content: content};
            return newItem;
        case 'Shopping':
            newItem = {title: name, color: expenseCategory[2].color, value: cost, content: content};
            return newItem;
        case 'Pet':
            newItem = {title: name, color: expenseCategory[3].color, value: cost, content: content};
            return newItem;
        case 'Dining':
            newItem = {title: name, color: expenseCategory[4].color, value: cost, content: content};
            return newItem;
        case 'RecurringInvestment':
            newItem = {title: name, color: expenseCategory[5].color, value: cost, content: content};
            return newItem;
    }
}

  const renderExpenses = () => {
    let list;
    let listData = []
    if (userData.bill.length) {
        userData.bill.map((item) => listData.push(fixedArgs(item.billAmount, item.billName, item.__typename)))
    }
    if (userData.shopping.length) {
        userData.shopping.map((item) => listData.push(fixedArgs(item.shoppingCost, item.shoppingPlace, item.__typename)))
    }
    if (userData.grocery.length) {
        userData.grocery.map((item) => listData.push(fixedArgs(item.groceryCost, item.groceryPlace, item.__typename)))
    }
    if (userData.pet.length) {
        userData.pet.map((item) => listData.push(fixedArgs(item.petItemCost, item.petItem, item.__typename)))
    }
    if (userData.recurringInvestment.length) {
        userData.recurringInvestment.map((item) => listData.push(fixedArgs(item.brokerageDeposit,item.brokerName, item.__typename)))
    }
    if (userData.dining.length) {
        userData.dining.map((item) => listData.push(fixedArgs(item.diningCost, item.diningRestaurant, item.__typename)))
    }
    console.log(listData);
    setDataArray(listData);
    }
  

  const userDataLength = Object.keys(userData).length;

  if (!userDataLength) {
      if (!loading){
          setUserData(data.me.budget)
      }
      return (
          <Row justify='space-around'>
              <Col>
                  <Loading/>
              </Col>
          </Row>
      )
  }

  return(
    <>
      <Row gutter={32}>
        <Col span={8}><Title level={1} type='secondary'>Your Spending At A Glance!</Title></Col>
      </Row>
      <Row>
        <Col>
          <Card style={{background: '#e6fffb', borderColor: '#e6fffb'}}title='Your spending this month'>
            {dataArray.length === 0 ? 'Loading...' : dataArray.map((item) => {
              return (
                <>
                  <Row><Text>{item.content}: ${item.value}</Text></Row>
                </>
              )
            })}
            <Button onClick={renderExpenses}>Append</Button>
            </Card>
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
              data={pieData}
              labelPosition={100 - 60 / 2}
              labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
              }}
            />
          </Row>
          {pieData.map((category) => {
            return (
              <Row key={category.title}><PieChartFilled style={{color: category.color}}/><Text>: {category.title}</Text></Row>
            )
          })}

        </Col>
      </Row>
    </>
  )
}