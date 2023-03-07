import React, {useState} from 'react';
import {Layout, Button, Typography, Col, Row, Card, Calendar, Modal} from 'antd';
import {bills, grocery, shopping, investment, pet, dining} from '../utils/colors-temp'
import AddExpense from '../components/AddExpense';


const {Text, Title} = Typography;
const {Content} = Layout;

export default function Profile() {
    const [currentExpense, setCurrentExpense] = useState({0: {
        label: bills.name,
        key: 'bills',
        color: bills.color
    },});
    const [open, setOpen] = useState(false);

    const showModal = () => {
    setOpen(true);
    }

    const closeModal = () => {
    setOpen(false);
    }
    const selectedDayExpenses = [];
    const expenseCategory = [
        {
            label: bills.name,
            key: 'bills',
            color: bills.color
        },
        {
            label: grocery.name,
            key: 'grocery',
            color: grocery.color
        },
        {
            label: shopping.name,
            key: 'shopping',
            color: shopping.color
        },
        {
            label: investment.name,
            key: 'investment',
            color: investment.color
        },
        {
            label: pet.name,
            key: 'pet',
            color: pet.color
        },
        {
            label: dining.name,
            key: 'dining',
            color: dining.color
        }
    ]

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const onClickButton = (e) => {
        setCurrentExpense(expenseCategory.filter(category => category.label === e.target.innerText))
        showModal(true);
    }
    
    return (
        <>
        <Content style={{
            padding: '10px 50px',
            background: '#e6fffb'
          }}>
            <Title>Welcome back!</Title>
            <Row justify='space-between'>
                <Col flex='164px'>
                    <Card 
                    style={{
                        background: '#87e8de',
                        borderColor: '#87e8de',
                        marginBottom: '20px'
                    }}
                    title='Add an expense'>
                        {expenseCategory.map((expense) => {
                            return (
                            <Row style={{padding: '0 0 5px 0'}}>
                                <Button
                                key={expense.key}
                                style={{background: expense.color, borderColor: expense.color, width: '100px'}}
                                onClick={onClickButton}
                                >
                                    {expense.label}
                                </Button>
                            </Row>
                        )
                        })}
                    </Card>
                    <Card 
                        style={{
                            background: '#87e8de',
                            borderColor: '#87e8de',
                            marginBottom: '20px'
                        }}
                        title="Day's expenses"
                    >

                    </Card>
                </Col>
                <Col flex='85%'>
                    <Card><Calendar onPanelChange={onPanelChange} /></Card>
                    {/* Add logic to populate this with selected day's expenses */}
                </Col>
            </Row>
        </Content>
        <Modal 
        open={open}
        title={currentExpense[0].label}
        onCancel={closeModal}
        footer={[]}
        >
            <AddExpense label={currentExpense[0].label}/>
        </Modal>
        </>
    )
}