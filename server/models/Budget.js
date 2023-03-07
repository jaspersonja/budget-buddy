const { Schema, model } = require('mongoose');

const budgetSchema = new Schema({
    income: {
        type: Number,
        required: true,
    }, 
    bills: [{
        billName: {
            type: String,
            required: true
        },
        billAmount: {
            type: Number,
            required: true
        },
    }],
    shopping: [{
        shoppingItem: {
            type: String,
            required: true
        },
        shoppingItemCost: {
            type: Number,
            required: true
        }
    }],
    groceries: [{
        groceryItem: {
            type: String,
            required: true
        },
        groceryItemCost: {
            type: Number,
            required: true
        }
    }],
    pet: [{
        petName: {
            type: String,
            required: true
        },
        petFood: {
            type: Number,
            required: true
        }
    }],
    dining: [{
        diningRestaurant: {
            type: String,
            required: true
        },
        diningBill: {
            type: Number,
            required: true
        }
    }],
    recurringInvestment: [{
        brokerageName: {
            type: String,
            required: true
        },
        brokerageDeposit: {
            type: Number,
            required: true
        }
    }]
});

// const Budget = model('Budget', budgetSchema);

module.exports = budgetSchema;