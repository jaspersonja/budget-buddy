import {Form, Input, Button, DatePicker} from 'antd'
import {ADD_BILL, ADD_DINING, ADD_GROCERY, ADD_PET, ADD_SHOPPING, ADD_RECURRINGINVESTMENTS } from '../utils/mutations';
import {useMutation} from '@apollo/client'
import { useState } from 'react';

export default function AddExpense(expense) {
    const [userFormData, setUserFormData] = useState({ name: '', expenditure: '', date: ''});
    const [fixedParams, setFixedParams] = useState({})
    const [addBill] = useMutation(ADD_BILL);
    const [addDining] = useMutation(ADD_DINING);
    const [addGrocery] = useMutation(ADD_GROCERY);
    const [addPet] = useMutation(ADD_PET);
    const [addShopping] = useMutation(ADD_SHOPPING);
    const [addInvestment] = useMutation(ADD_RECURRINGINVESTMENTS);
    const onChange = (e) => {
        const {name, value} = e.target
        setUserFormData({...userFormData, [name]: value});
        console.log(userFormData);
    };

    const onDateChange = (date, dateString) => {
        setUserFormData({...userFormData, date: dateString})
        console.log(userFormData);
      };

    const onClick = async () => {
        
        switch(expense.label) {
            case 'Bills':
                setFixedParams({billName: userFormData.name, billAmount: parseInt(userFormData.expenditure), billDate: userFormData.date})
                try {
                    const data = await addBill({variables: {input: fixedParams}})
                } catch (error) {
                    console.log(error)
                }
                break;
            case 'Grocery':
                setFixedParams({groceryPlace: userFormData.name, groceryCost: parseInt(userFormData.expenditure), groceryDate: userFormData.date})
                try {
                    const data = await addGrocery({variables: {input: fixedParams}})
                } catch (error) {
                    console.log(error)
                }
                break;
            case 'Shopping':
                setFixedParams({shoppingPlace: userFormData.name, shoppingCost: parseInt(userFormData.expenditure), shoppingDate: userFormData.date})
                try {
                    const data = await addShopping({variables: {input: fixedParams}})
                } catch (error) {
                    console.log(error)
                }
                break;
            case 'Pet':
                setFixedParams({petItem: userFormData.name, petItemCost: parseInt(userFormData.expenditure), petDate: userFormData.date})
                try {   
                    const data = await addPet({variables: {input: fixedParams}})
                } catch (error) {
                    console.log(error)
                }
                break;
            case 'Investment':
                setFixedParams({brokerName: userFormData.name, brokerageDeposit: parseInt(userFormData.expenditure), brokerageDate: userFormData.date})
                try {
                    const data = await addInvestment({variables: {input: fixedParams}})
                } catch (error) {
                    console.log(error)
                }
                break;
            case 'Dining':
                setFixedParams({diningRestaurant: userFormData.name, diningBill: parseInt(userFormData.expenditure), diningDate: userFormData.date})
                try {
                    const data = await addDining({variables: {input: fixedParams}})
                } catch (error) {
                    console.log(error)
                }
        }

    }
    

    return (
        <>
        <Form
            title={expense.label}
            style={{background: expense.color}}
        >
            <Form.Item
                label='Name'
                rules={[
                    {required: true, message: 'Please input name of expense!'}
                ]}
            >
                <Input name='name' value={userFormData.name} onChange={onChange}/>
            </Form.Item>
            <Form.Item
                label="Money Spent"
                rules={[
                  {required: true, message: 'Please input the amount spent!'}
                ]}
            >
                <Input name='expenditure' value={userFormData.expenditure} onChange={onChange}/>
            </Form.Item>
            <Form.Item
                label='Date Spent'
                name='date'
                rules={[
                    {required: true, message: 'Please select a date!'}
                ]}
            >
                <DatePicker name='date' value={userFormData.date} onChange={onDateChange}/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 10,
                    span: 16,
                }}
            >
                <Button style={{background: '#13c2c2'}} htmlType="submit" onClick={onClick}>
                    Add Expense
                </Button>
                </Form.Item>
        </Form>
        </>
    )
}