import {Form, Input, Button, DatePicker} from 'antd'

export default function AddExpense(expense) {
    const onChange = (date, dateString) => {
      };

    return (
        <>
        <Form
            title={expense.label}
            style={{background: expense.color}}
        >
            <Form.Item
                label='Name'
                name='name'
                rules={[
                    {required: true, message: 'Please input name of expense!'}
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Money Spent"
                name="expenditure"
                rules={[
                  {required: true, message: 'Please input the amount spent!'}
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label='Date Spent'
                name='date'
                rules={[
                    {required: true, message: 'Please select a date!'}
                ]}
            >
                <DatePicker onChange={onChange}/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 10,
                    span: 16,
                }}
            >
                <Button style={{background: '#13c2c2'}} htmlType="submit">
                    Add Expense
                </Button>
                </Form.Item>
        </Form>
        </>
    )
}