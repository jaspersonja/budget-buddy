import React, { useState } from 'react';
import Budget from 'server/models/Budget.js';

function budgetForm(item) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        item.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input
        });

        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };


    return !item.edit ? (
        <div>
            <form className="budget-form" on submit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Write down your expenses"
                    value={input}
                    name="text"
                    className="budget-input"
                    onChange={handleChange}
                ></input>
                <div className="dropdown">
                    <button className={`dropbtn ${Budget}`}>

                    </button>
                    <div classname="dropdown-content">
                        <p onClick={() => setInput(Budget[0])}>income</p>
                        <p onClick={() => setInput(Budget[1])}>bills</p>
                        <p onClick={() => setInput(Budget[2])}>shopping</p>
                        <p onClick={() => setInput(Budget[3])}>groceries</p>
                        <p onClick={() => setInput(Budget[4])}>pet</p>
                        <p onClick={() => setInput(Budget[5])}>dining</p>
                        <p onClick={() => setInput(Budget[6])}>recurringInvestment</p>
                    </div>
                </div>
                <button className="budget-button">Add budget item</button>
            </form>
        </div>
    ):(
        <div></div>
    );
}

export default budgetForm;