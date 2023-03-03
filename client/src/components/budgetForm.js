import React, { useState } from 'react';

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
            </form>
        </div>
    ):(
        <div></div>
    )
}