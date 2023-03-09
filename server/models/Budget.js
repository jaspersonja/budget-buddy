const { Schema, model } = require('mongoose');


const budgetSchema = new Schema({
    income: {
        type: Number,
        required: true,
        default: 0
    }, 
    bill: [{
        billName: {
            type: String,
            required: true
        },
        billAmount: {
            type: String,
            required: true
        },
        billDate: {
            type: String,
            required: true
        }
    }],
    shopping: [{
        shoppingPlace: {
            type: String,
            required: true
        },
        shoppingCost: {
            type: Number,
            required: true
        },
        shoppingDate: {
            type: String,
            required: true
        }
    }],
    grocery: [{
        groceryItem: {
            type: String,
            required: true
        },
        groceryItemCost: {
            type: Number,
            required: true
        },
        groceryDate: {
            type: String,
            required: true
        }
    }],
    pet: [{
        petItem: {
            type: String,
            required: true
        },
        petItemCost: {
            type: Number,
            required: true
        },
        petDate: {
            type: String,
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
        },
        diningDate: {
            type: String,
            required: true
        }
    }],
    recurringInvestment: [{
        brokerName: {
            type: String,
            required: true
        },
        brokerageDeposit: {
            type: Number,
            required: true
        },
        brokerageDate: {
            type: String,
            required: true
        }
    }]
});

// const Budget = model('Budget', budgetSchema);

module.exports = budgetSchema;